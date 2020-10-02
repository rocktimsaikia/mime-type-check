const test = require('ava');
const getMimeType = require('.');

test('check invalid files with extensions', t => {
	t.throws(() => {
		getMimeType('https://rocktim.xyz/images/profile');
	}, {
		message: 'Does not contain valid file extension!'
	});
});

test('images/* mime-types', t => {
	t.is(getMimeType('https://rocktim.xyz/images/profile.png'), 'image/png');
	t.is(getMimeType('https://rocktim.xyz/images/profile.jpeg'), 'image/jpeg');
	t.is(getMimeType('https://rocktim.xyz/images/profile.jpg'), 'image/jpeg');
	t.is(getMimeType('https://rocktim.xyz/images/profile.gif'), 'image/gif');
	t.is(getMimeType('https://rocktim.xyz/images/profile.wbmp'), 'image/vnd.wap.wbmp');
	t.is(getMimeType('https://rocktim.xyz/images/profile.svg'), 'image/svg+xml');
	t.is(getMimeType('https://rocktim.xyz/images/profile.svgz'), 'image/svg+xml');
	t.is(getMimeType('https://rocktim.xyz/images/profile.webp'), 'image/webp');
	t.is(getMimeType('https://rocktim.xyz/images/profile.ico'), 'image/x-icon');
	t.is(getMimeType('https://rocktim.xyz/images/profile.tif'), 'image/tiff');
	t.is(getMimeType('https://rocktim.xyz/images/profile.tiff'), 'image/tiff');
	t.is(getMimeType('https://rocktim.xyz/images/profile.bmp'), 'image/x-ms-bmp');
	t.is(getMimeType('https://rocktim.xyz/images/profile.jng'), 'image/x-jng');
});

test('text/* mime-types', t => {
	t.is(getMimeType('https://rocktim.xyz/images/profile.txt'), 'text/plain');
	t.is(getMimeType('https://rocktim.xyz/images/profile.html'), 'text/html');
	t.is(getMimeType('https://rocktim.xyz/images/profile.htm'), 'text/html');
	t.is(getMimeType('https://rocktim.xyz/images/profile.shtml'), 'text/html');
	t.is(getMimeType('https://rocktim.xyz/images/profile.css'), 'text/css');
	t.is(getMimeType('https://rocktim.xyz/images/profile.xml'), 'text/xml');
	t.is(getMimeType('https://rocktim.xyz/images/profile.mml'), 'text/mathml');
	t.is(getMimeType('https://rocktim.xyz/images/profile.jad'), 'text/vnd.sun.j2me.app-descriptor');
	t.is(getMimeType('https://rocktim.xyz/images/profile.htc'), 'text/x-component');
	t.is(getMimeType('https://rocktim.xyz/images/profile.wml'), 'text/vnd.wap.wml');
});

test('audio/* mime-types', t => {
	t.is(getMimeType('https://rocktim.xyz/images/profile.mid'), 'audio/midi');
	t.is(getMimeType('https://rocktim.xyz/images/profile.midi'), 'audio/midi');
	t.is(getMimeType('https://rocktim.xyz/images/profile.kar'), 'audio/midi');
	t.is(getMimeType('https://rocktim.xyz/images/profile.mp3'), 'audio/mpeg');
	t.is(getMimeType('https://rocktim.xyz/images/profile.ogg'), 'audio/ogg');
	t.is(getMimeType('https://rocktim.xyz/images/profile.m4a'), 'audio/x-m4a');
	t.is(getMimeType('https://rocktim.xyz/images/profile.ra'), 'audio/x-realaudio');
});

test('video/* mime-types', t => {
	t.is(getMimeType('https://rocktim.xyz/images/profile.3gpp'), 'video/3gpp');
	t.is(getMimeType('https://rocktim.xyz/images/profile.3gp'), 'video/3gpp');
	t.is(getMimeType('https://rocktim.xyz/images/profile.ts'), 'video/mp2t');
	t.is(getMimeType('https://rocktim.xyz/images/profile.mp4'), 'video/mp4');
	t.is(getMimeType('https://rocktim.xyz/images/profile.mpeg'), 'video/mpeg');
	t.is(getMimeType('https://rocktim.xyz/images/profile.mpg'), 'video/mpeg');
	t.is(getMimeType('https://rocktim.xyz/images/profile.mov'), 'video/quicktime');
	t.is(getMimeType('https://rocktim.xyz/images/profile.webm'), 'video/webm');
	t.is(getMimeType('https://rocktim.xyz/images/profile.flv'), 'video/x-flv');
	t.is(getMimeType('https://rocktim.xyz/images/profile.m4v'), 'video/x-m4v');
	t.is(getMimeType('https://rocktim.xyz/images/profile.mng'), 'video/x-mng');
	t.is(getMimeType('https://rocktim.xyz/images/profile.asx'), 'video/x-ms-asf');
	t.is(getMimeType('https://rocktim.xyz/images/profile.asf'), 'video/x-ms-asf');
	t.is(getMimeType('https://rocktim.xyz/images/profile.wmv'), 'video/x-ms-wmv');
	t.is(getMimeType('https://rocktim.xyz/images/profile.avi'), 'video/x-msvideo');
});

test('application/* mime-types', t => {
	t.is(getMimeType('https://rocktim.xyz/images/profile.js'), 'application/javascript');
	t.is(getMimeType('https://rocktim.xyz/images/profile.atom'), 'application/atom+xml');
	t.is(getMimeType('https://rocktim.xyz/images/profile.rss'), 'application/rss+xml');
	t.is(getMimeType('https://rocktim.xyz/images/profile.woff'), 'application/font-woff');
	t.is(getMimeType('https://rocktim.xyz/images/profile.jar'), 'application/java-archive');
	t.is(getMimeType('https://rocktim.xyz/images/profile.war'), 'application/java-archive');
	t.is(getMimeType('https://rocktim.xyz/images/profile.ear'), 'application/java-archive');
	t.is(getMimeType('https://rocktim.xyz/images/profile.json'), 'application/json');
	t.is(getMimeType('https://rocktim.xyz/images/profile.hqx'), 'application/mac-binhex40');
	t.is(getMimeType('https://rocktim.xyz/images/profile.doc'), 'application/msword');
	t.is(getMimeType('https://rocktim.xyz/images/profile.pdf'), 'application/pdf');
	t.is(getMimeType('https://rocktim.xyz/images/profile.ps'), 'application/postscript');
	t.is(getMimeType('https://rocktim.xyz/images/profile.eps'), 'application/postscript');
	t.is(getMimeType('https://rocktim.xyz/images/profile.ai'), 'application/postscript');
	t.is(getMimeType('https://rocktim.xyz/images/profile.rtf'), 'application/rtf');
	t.is(getMimeType('https://rocktim.xyz/images/profile.m3u8'), 'application/vnd.apple.mpegurl');
	t.is(getMimeType('https://rocktim.xyz/images/profile.xls'), 'application/vnd.ms-excel');
	t.is(getMimeType('https://rocktim.xyz/images/profile.eot'), 'application/vnd.ms-fontobject');
	t.is(getMimeType('https://rocktim.xyz/images/profile.ppt'), 'application/vnd.ms-powerpoint');
	t.is(getMimeType('https://rocktim.xyz/images/profile.wmlc'), 'application/vnd.wap.wmlc');
	t.is(getMimeType('https://rocktim.xyz/images/profile.kml'), 'application/vnd.google-earth.kml+xml');
	t.is(getMimeType('https://rocktim.xyz/images/profile.kmz'), 'application/vnd.google-earth.kmz');
	t.is(getMimeType('https://rocktim.xyz/images/profile.7z'), 'application/x-7z-compressed');
	t.is(getMimeType('https://rocktim.xyz/images/profile.cco'), 'application/x-cocoa');
	t.is(getMimeType('https://rocktim.xyz/images/profile.jardiff'), 'application/x-java-archive-diff');
	t.is(getMimeType('https://rocktim.xyz/images/profile.jnlp'), 'application/x-java-jnlp-file');
	t.is(getMimeType('https://rocktim.xyz/images/profile.run'), 'application/x-makeself');
	t.is(getMimeType('https://rocktim.xyz/images/profile.pl'), 'application/x-perl');
	t.is(getMimeType('https://rocktim.xyz/images/profile.pm'), 'application/x-perl');
	t.is(getMimeType('https://rocktim.xyz/images/profile.prc'), 'application/x-pilot');
	t.is(getMimeType('https://rocktim.xyz/images/profile.pdb'), 'application/x-pilot');
	t.is(getMimeType('https://rocktim.xyz/images/profile.rar'), 'application/x-rar-compressed');
	t.is(getMimeType('https://rocktim.xyz/images/profile.rpm'), 'application/x-redhat-package-manager');
	t.is(getMimeType('https://rocktim.xyz/images/profile.sea'), 'application/x-sea');
	t.is(getMimeType('https://rocktim.xyz/images/profile.swf'), 'application/x-shockwave-flash');
	t.is(getMimeType('https://rocktim.xyz/images/profile.sit'), 'application/x-stuffit');
	t.is(getMimeType('https://rocktim.xyz/images/profile.tcl'), 'application/x-tcl');
	t.is(getMimeType('https://rocktim.xyz/images/profile.tk'), 'application/x-tcl');
	t.is(getMimeType('https://rocktim.xyz/images/profile.der'), 'application/x-x509-ca-cert');
	t.is(getMimeType('https://rocktim.xyz/images/profile.pem'), 'application/x-x509-ca-cert');
	t.is(getMimeType('https://rocktim.xyz/images/profile.crt'), 'application/x-x509-ca-cert');
	t.is(getMimeType('https://rocktim.xyz/images/profile.xpi'), 'application/x-xpinstall');
	t.is(getMimeType('https://rocktim.xyz/images/profile.xhtml'), 'application/xhtml+xml');
	t.is(getMimeType('https://rocktim.xyz/images/profile.xspf'), 'application/xspf+xml');
	t.is(getMimeType('https://rocktim.xyz/images/profile.zip'), 'application/zip');
	t.is(getMimeType('https://rocktim.xyz/images/profile.bin'), 'application/octet-stream');
	t.is(getMimeType('https://rocktim.xyz/images/profile.exe'), 'application/octet-stream');
	t.is(getMimeType('https://rocktim.xyz/images/profile.dll'), 'application/octet-stream');
	t.is(getMimeType('https://rocktim.xyz/images/profile.deb'), 'application/octet-stream');
	t.is(getMimeType('https://rocktim.xyz/images/profile.dmg'), 'application/octet-stream');
	t.is(getMimeType('https://rocktim.xyz/images/profile.iso'), 'application/octet-stream');
	t.is(getMimeType('https://rocktim.xyz/images/profile.img'), 'application/octet-stream');
	t.is(getMimeType('https://rocktim.xyz/images/profile.msi'), 'application/octet-stream');
	t.is(getMimeType('https://rocktim.xyz/images/profile.msp'), 'application/octet-stream');
	t.is(getMimeType('https://rocktim.xyz/images/profile.msm'), 'application/octet-stream');
	t.is(getMimeType('https://rocktim.xyz/images/profile.docx'), 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
	t.is(getMimeType('https://rocktim.xyz/images/profile.xlsx'), 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
	t.is(getMimeType('https://rocktim.xyz/images/profile.pptx'), 'application/vnd.openxmlformats-officedocument.presentationml.presentation');
});
