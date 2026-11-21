package io.github.yeondenn.promochecklist;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

/** 체크리스트 웹페이지를 띄우고, 페이지의 "앱 열기" 링크를 받아 다른 앱을 실행한다. */
public class MainActivity extends Activity {
    private static final String HOME = "https://yeondenn.github.io/promo-checklist/";
    private static final String HOME_HOST = "yeondenn.github.io";
    private static final String HOME_PATH = "/promo-checklist";

    private WebView web;

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        web = new WebView(this);
        web.setBackgroundColor(0xFF14161D);
        setContentView(web);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true); // 체크 상태 저장(localStorage)
        // 페이지가 앱 안에서 열렸는지 알 수 있게 표시를 붙인다.
        s.setUserAgentString(s.getUserAgentString() + " PromoChecklistApp/1");

        web.setWebChromeClient(new WebChromeClient()); // confirm() 창 표시
        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                return handle(request.getUrl());
            }
        });

        if (state == null || web.restoreState(state) == null) {
            web.loadUrl(HOME);
        }
    }

    /** true를 돌려주면 웹뷰가 그 주소를 열지 않는다. */
    private boolean handle(Uri uri) {
        String scheme = uri.getScheme() == null ? "" : uri.getScheme();

        // applaunch://open?pkg=<패키지[,패키지]>&url=<앱이 없을 때 열 주소>
        if (scheme.equals("applaunch")) {
            String pkg = uri.getQueryParameter("pkg");
            String fallback = uri.getQueryParameter("url");
            Intent launch = null;
            // pkg는 쉼표로 여러 개일 수 있다. 앞에서부터 설치된 것을 연다.
            for (String one : (pkg == null ? "" : pkg).split(",")) {
                if (launch == null && !one.trim().isEmpty()) {
                    launch = getPackageManager().getLaunchIntentForPackage(one.trim());
                }
            }
            if (launch != null) {
                startActivity(launch);
            } else if (fallback != null) {
                Toast.makeText(this, "앱이 없어 웹으로 엽니다", Toast.LENGTH_SHORT).show();
                openOutside(Uri.parse(fallback));
            }
            return true;
        }

        // 체크리스트 페이지 자신은 웹뷰 안에서 연다.
        boolean isWeb = scheme.equals("http") || scheme.equals("https");
        if (isWeb && HOME_HOST.equals(uri.getHost()) && uri.getPath() != null && uri.getPath().startsWith(HOME_PATH)) {
            return false;
        }

        // 그 밖의 주소(다른 사이트, 앱 전용 주소)는 바깥 앱이나 브라우저로 넘긴다.
        openOutside(uri);
        return true;
    }

    private void openOutside(Uri uri) {
        try {
            startActivity(new Intent(Intent.ACTION_VIEW, uri));
        } catch (Exception e) {
            Toast.makeText(this, "열 수 있는 앱이 없습니다", Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    protected void onSaveInstanceState(Bundle out) {
        super.onSaveInstanceState(out);
        web.saveState(out);
    }

    @Override
    protected void onResume() {
        super.onResume();
        web.onResume(); // 다시 켜면 페이지가 날짜가 바뀌었는지 확인한다
    }

    @Override
    protected void onPause() {
        web.onPause();
        super.onPause();
    }

    @Override
    public void onBackPressed() {
        if (web.canGoBack()) {
            web.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
