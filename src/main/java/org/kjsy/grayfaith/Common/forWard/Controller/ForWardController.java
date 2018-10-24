package org.kjsy.grayfaith.Common.forWard.Controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Slf4j
@Controller("forWardController")
public class ForWardController {

    @RequestMapping("/forward/**.do")
    public String forward(HttpServletRequest request, HttpSession session) {
        String ctx = request.getContextPath() + "/forward/";
        String uri = request.getRequestURI();
        String path = null;
        try {
            String method = request.getMethod();
            StringBuilder logStr = new StringBuilder();
            if ("POST".equals(method)) {
                logStr.append("==>POSTRequest");
            } else if ("GET".equals(method)) {
                logStr.append("==>GETRequest");
            } else {
                logStr.append("==>");
                logStr.append(method);
                logStr.append("Request");
            }
            logStr.append(",请求基地址:");
            logStr.append(request.getContextPath());
            logStr.append(",URI:");
            logStr.append(request.getRequestURI());

            if ("/".equals(uri)) {
                path = "/";
            } else {
                path = uri.substring(uri.indexOf(ctx) + ctx.length());
            }
            if (path.lastIndexOf(".") > 0) {
                path = path.substring(0, path.lastIndexOf("."));
            }
            logStr.append(",访问路径:");
            logStr.append(path);

            log.info(logStr.toString());
        } catch (Exception e) {
            log.error("转发页面出现异常", e);
        }
        return path;
    }
}