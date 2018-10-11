package org.kjsy.grayfaith.Common.forWard.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

@WebServlet(name = "forWardServlet", urlPatterns = {"/forward/**"}, loadOnStartup = 1)
public class ForWardServlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String method = req.getMethod();
        if ("POST".equals(method)) {
            // TODO Log.DEBUG("==>POSTRequest");
        } else if ("GET".equals(method)) {
            // TODO Log.DEBUG("==>GETRequest");
        } else {
            // TODO Log.DEBUG("==>" + method + "Request");
        }
        String sessionId = req.getSession().getId();
        String sessionCreationTime = new SimpleDateFormat("YYYY:MM:dd-HH:mm:ss").format(new Date(req.getSession().getCreationTime()));

        // TODO Log.DEBUG("==>请求地址:{}",req.getContextPath());
        // TODO Log.DEBUG("==>uri:{}",req.getRequestURI());

        String ctx = req.getContextPath() + "/forward/";
        String uri = req.getRequestURI();

        String path = uri.substring(uri.indexOf(ctx) + ctx.length());
        if (path.lastIndexOf(".") > 0) {
            path = path.substring(0, path.lastIndexOf("."));
        }
        req.getRequestDispatcher(path).forward(null, null);
        System.out.println(path);
        File file = new File(path);
        if (file.exists()) {
            // TODO Log.WARN("访问路径:{}",path);
            // TODO 转发404
        }
        // TODO Log.DEBUG("访问路径:{}",path);

    }
}