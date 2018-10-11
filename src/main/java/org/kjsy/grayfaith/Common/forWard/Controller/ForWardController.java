package org.kjsy.grayfaith.Common.forWard.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller("forWardController")
public class ForWardController {

    @RequestMapping("/forward/**")
    public String forward(HttpServletRequest request, HttpSession session) {
        String method = request.getMethod();
        if ("POST".equals(method)) {
            // TODO Log.DEBUG("==>POSTRequest");
        } else if ("GET".equals(method)) {
            // TODO Log.DEBUG("==>GETRequest");
        } else {
            // TODO Log.DEBUG("==>" + method + "Request");
        }
        // TODO log.debug("当前请求的基地址:{}",request.getContextPath());
        // TODO log.info("==> uri:{}",request.getRequestURI());
        String ctx = request.getContextPath() + "/forward/";
        String uri = request.getRequestURI();

        String path = uri.substring(uri.indexOf(ctx) + ctx.length());
        if (path.lastIndexOf(".") > 0) {
            path = path.substring(0, path.lastIndexOf("."));
        }

        // TODO log.debug("访问路径:{}",path);
        return path;
    }
}