<%@ page language="java" contentType="text/html; charset=GBk"
    pageEncoding="GBK"%>
<%@ page import="java.util.*" %>
<%@ page import="java.io.*" %>
<%@ page import="com.hd.util.RandomFileRenamePolicy" %>
<%@page import="com.oreilly.servlet.*"%>
<%
	//----------------------------------------
	//----------------------------------------
	String root = request.getSession().getServletContext().getRealPath("/");
	String savePath = root + "file-library\\";
	int maxPostSize = 3 * 5 * 1024 * 1024;
	RandomFileRenamePolicy frp = new RandomFileRenamePolicy();
	MultipartRequest multi = new MultipartRequest(request, savePath, maxPostSize, "utf-8",frp);
	String fieldIds = "";
	//ȡ���������ϴ��ļ������֣�����ö�����͡�
	Enumeration filesName = multi.getFileNames();
	//�������ص�ö�����ͣ�COS�����ϴ�����ļ����������ж���ı����ǩʱ��ʹ��while�ؼ��ֱ���.
	long l = 0L;
	String fileType = null;
	String fileName = null;
	while(filesName.hasMoreElements()){
		//������ö�������а����ļ����󣬻�ȡ�ļ�������ö���е�����
		String fname = (String)filesName.nextElement();
		//ͨ�����ֻ�ȡ�ļ�������java�ļ�����
		File file = multi.getFile(fname);
		//�ж��Ƿ��õ��ļ�
		if(file != null){
			//��ȡ�ļ�����ʵ����(�Ա��ܴ洢�����ݿ���)
			fileName = multi.getFilesystemName(fname);
			fileType = fileName.substring(fileName.lastIndexOf(".")+1);
			RandomAccessFile raFile = new RandomAccessFile(new File(savePath+fileType+"\\"+fileName),"r"); 
			l = raFile.length(); 
			fieldIds = fieldIds + fileName+",";
		}
	}
	fieldIds = fieldIds.substring(0,fieldIds.length()-1);
	response.setContentType("text/html;charset=GBK");
	response.getWriter().print("{'address':'"+RandomFileRenamePolicy.fp+"','docName':'"+RandomFileRenamePolicy.fn+"','fileType':'"+fileType+"','docCode':'"+fileName+"','size':'"+l+"','success':true,'message':'�ϴ��ɹ�','ids':'"+fieldIds+"'}");
%>

















