var _0x3644=['<div\x20class=\x27ten_mssv_sv\x27>','<label\x20class=\x27lb_ttsv\x27>Thông\x20tin\x20sinh\x20viên\x20</label></br>','<tr><th>Công\x20Ty</th>\x20\x20<th>Địa\x20chỉ</th>\x20\x20<th>Ngày\x20bắt\x20đầu</th>\x20\x20<th>ĐT\x20Người\x20quản\x20lý</th>\x20\x20<th>Chức\x20Vụ</th>\x20\x20\x20<th>Vị\x20trí\x20công\x20việc</th>\x20','googleSheetToJSON','hoten','\x20/\x20','<span\x20class=\x27ttsv\x27>','<b>','</span>\x20</br>','<li\x20id=','<strong\x20id=','<p>','</p>','</li>','</div>','</tr></table>','<table\x20id=\x27time-report-tuan\x27\x20class=\x27dtable\x27\x20><tr><th>Tuần\x20báo\x20cáo</th><th>Thời\x20gian\x20bắt\x20đầu</th><th>Thời\x20gian\x20kết\x20thúc</th></tr></table>','</ul>','alert','large','tuan-mot','tuan-hai','tuan-ba','tuan-nam','tuan-sau','tuan-bay','tuan-tam','tuan-chin','tuan-muoi-mot','tuan-muoi-hai','#baocao\x20li','sort','each','appendTo','#baocao','Tuần\x201:','Tuần\x202:','Tuần\x204:','Tuần\x205:','Tuần\x206:','Tuần\x207:','Tuần\x209:','Tuần\x2010:','Tuần\x2012:','tuan-bon','tuan-muoi','#thongtin_tuan','Sheet3','setDate','getDate','push','Tuần\x20','Từ\x20','toLocaleDateString','vi-VN','time-report-tuan','insertRow','insertCell','innerHTML','getElementById','inGVSDT','addEventListener','keyup','preventDefault','btnDoGV','then','querySelector','.js-loading','classList','remove','is-hidden','add','val','replace','input[name=\x27txtGVSDT\x27]','substring','length','VUI\x20LÒNG\x20NHẬP\x20ĐỦ\x20THÔNG\x20TIN\x20EMAIL\x20VÀ\x20SỐ\x20ĐIỆN\x20THOẠI','#InfoGV','html','ouab0ad','forEach','1nO2nV65Vi3dZWGlaIOXLEc-_JWEZK16XFbjQVH_3Q0U','done','<table\x20class=\x27dtable\x27>','<tr><th>Tên\x20SV</th>\x20\x20<th>Lớp</th>\x20\x20<th>Mã\x20SV</th>\x20\x20<th>Ngành</th>\x20\x20<th>Ngày\x20sinh</th>\x20\x20\x20<th>Email\x20SV</th>\x20\x20<th>SĐT\x20SV</th>\x20\x20<th>Môn</th><th>Xem\x20Báo\x20Cáo</th>\x20','gvemail','<tr>','getOwnPropertyNames','sotc','gvhoten','gvdienthoai','mand','nhom','mamh','congty','diachi','ngaybatdau','dienthoaiquanly','chucvu','vitricongviec','match','concat','join','<td>','</td>','masv',')\x27\x20class=\x27report_\x27>XEM\x20BÁO\x20CÁO</span></td>','Không\x20tìm\x20thấy\x20thông\x20tin','#countHDGV','<h2>SLHD:\x20','</h2>','fail'];(function(_0x5246fe,_0x37c6c9){var _0x5616c6=function(_0x3750c0){while(--_0x3750c0){_0x5246fe['push'](_0x5246fe['shift']());}};_0x5616c6(++_0x37c6c9);}(_0x3644,0xac));var _0x5b40=function(_0x298a7d,_0x4eaba6){_0x298a7d=_0x298a7d-0x0;var _0x32b10c=_0x3644[_0x298a7d];return _0x32b10c;};var input=document[_0x5b40('0x0')](_0x5b40('0x1'));input[_0x5b40('0x2')](_0x5b40('0x3'),function(_0x5755d2){if(_0x5755d2['keyCode']===0xd){_0x5755d2[_0x5b40('0x4')]();document[_0x5b40('0x0')](_0x5b40('0x5'))['click']();}});function stepGetGiangVien(){doLoading()['then'](doGetGiangVien)[_0x5b40('0x6')](doComplete);}function stepGetSinhVien(){doLoading()['then'](doGetSinhVien)[_0x5b40('0x6')](doComplete)['then'](doShowUpdate);}function doLoading(){return new Promise(function(_0x3830de,_0x2c4294){document[_0x5b40('0x7')](_0x5b40('0x8'))[_0x5b40('0x9')][_0x5b40('0xa')](_0x5b40('0xb'));_0x3830de();});}function doGetGiangVien(){return new Promise(function(_0x843f1e,_0x3f5761){giangVienGet();_0x843f1e();});}function doComplete(){return new Promise(function(_0x165301,_0x52eb8c){setTimeout(()=>{document[_0x5b40('0x7')](_0x5b40('0x8'))[_0x5b40('0x9')][_0x5b40('0xc')]('is-hidden');},0x3e8);_0x165301();});}function giangVienGet(){var _0x36e7da=$['trim']($('input[name=\x27txtGVEmail\x27]')[_0x5b40('0xd')]())[_0x5b40('0xe')](/ /g,'');var _0x17d8fe=$['trim']($(_0x5b40('0xf'))[_0x5b40('0xd')]())[_0x5b40('0xe')](/ /g,'');var _0x5d591=_0x17d8fe[_0x5b40('0x10')](0x1,_0x17d8fe[_0x5b40('0x11')]);if(_0x36e7da==''||_0x17d8fe==''){alert(_0x5b40('0x12'));return![];}$(_0x5b40('0x13'))[_0x5b40('0x14')]('');$('#countHDGV')[_0x5b40('0x14')]('');var _0x4ed578=['',_0x5b40('0x15')];_0x4ed578[_0x5b40('0x16')](function(_0x3dd0d9){$['googleSheetToJSON'](_0x5b40('0x17'),_0x3dd0d9)[_0x5b40('0x18')](function(_0x4a65de){var _0x1c7a28=_0x5b40('0x19');_0x1c7a28+=_0x5b40('0x1a');var _0x2c0f12=0x0;var _0x1dd62c;_0x4a65de[_0x5b40('0x16')](function(_0x5de760){var _0x5414f5=_0x5de760[_0x5b40('0x1b')][_0x5b40('0xe')](/ /g,'');var _0x5849f1=_0x5de760['gvdienthoai']['replace'](/ /g,'');if(_0x5414f5==_0x36e7da&&(_0x5849f1==_0x17d8fe||_0x5849f1==_0x5d591)){_0x2c0f12++;_0x1c7a28+=_0x5b40('0x1c');Object[_0x5b40('0x1d')](_0x5de760)[_0x5b40('0x16')](function(_0x511a75){if(_0x511a75==_0x5b40('0x1e')||_0x511a75=='tt'||_0x511a75==_0x5b40('0x1f')||_0x511a75=='gvemail'||_0x511a75==_0x5b40('0x20')||_0x511a75==_0x5b40('0x21')||_0x511a75==_0x5b40('0x22')||_0x511a75==_0x5b40('0x23')||_0x511a75===_0x5b40('0x24')||_0x511a75===_0x5b40('0x25')||_0x511a75===_0x5b40('0x26')||_0x511a75===_0x5b40('0x27')||_0x511a75===_0x5b40('0x28')||_0x511a75===_0x5b40('0x29')||_0x511a75[_0x5b40('0x2a')](/tuan.*/))return;var _0xab2652=[][_0x5b40('0x2b')](_0x5de760[_0x511a75])[_0x5b40('0x2c')]('\x20/\x20');_0x1c7a28+=_0x5b40('0x2d')+_0xab2652+_0x5b40('0x2e');if(_0x511a75==_0x5b40('0x2f'))_0x1dd62c=_0x5de760[_0x511a75];});_0x1c7a28+='<td><span\x20onclick=\x27xemBaoCao('+_0x1dd62c+_0x5b40('0x30');_0x1c7a28+='</tr>';}});if(_0x2c0f12==0x0)$(_0x5b40('0x13'))[_0x5b40('0x14')](_0x5b40('0x31'));else{$(_0x5b40('0x13'))[_0x5b40('0x14')](_0x1c7a28);$(_0x5b40('0x32'))[_0x5b40('0x14')](_0x5b40('0x33')+_0x2c0f12+_0x5b40('0x34'));}})[_0x5b40('0x35')](function(_0x2a2ba7){});});}function xemBaoCao(_0x42df0e){var _0x1347f2=['',_0x5b40('0x15')];strTextThongTinSV=_0x5b40('0x36');strTextThongTinSV+=_0x5b40('0x37');strTextCongTy=_0x5b40('0x19');strTextCongTy+=_0x5b40('0x38');strTextBaoCao='<ul\x20id=\x27baocao\x27>';strTextCongTy+=_0x5b40('0x1c');document[_0x5b40('0x7')](_0x5b40('0x8'))['classList'][_0x5b40('0xa')](_0x5b40('0xb'));_0x1347f2['forEach'](function(_0x52ca6a){$[_0x5b40('0x39')]('1nO2nV65Vi3dZWGlaIOXLEc-_JWEZK16XFbjQVH_3Q0U',_0x52ca6a)[_0x5b40('0x18')](function(_0x962bc){_0x962bc['forEach'](function(_0xceb7c8){if(_0xceb7c8[_0x5b40('0x2f')]==_0x42df0e){Object[_0x5b40('0x1d')](_0xceb7c8)[_0x5b40('0x16')](function(_0x19a2f5){if(_0x19a2f5===_0x5b40('0x2f')||_0x19a2f5===_0x5b40('0x3a')){var _0x961106=[][_0x5b40('0x2b')](_0xceb7c8[_0x19a2f5])[_0x5b40('0x2c')](_0x5b40('0x3b'));strTextThongTinSV+=_0x5b40('0x3c')+_0x5b40('0x3d')+_0x961106+'</b>'+_0x5b40('0x3e');}if(_0x19a2f5===_0x5b40('0x24')||_0x19a2f5===_0x5b40('0x25')||_0x19a2f5===_0x5b40('0x26')||_0x19a2f5===_0x5b40('0x27')||_0x19a2f5===_0x5b40('0x28')||_0x19a2f5===_0x5b40('0x29')){var _0x961106=[]['concat'](_0xceb7c8[_0x19a2f5])[_0x5b40('0x2c')]('\x20/\x20');strTextCongTy+=_0x5b40('0x2d')+_0x961106+_0x5b40('0x2e');}else{if(_0x19a2f5['match'](/tuan.*/)){var _0x961106=[]['concat'](_0xceb7c8[_0x19a2f5])[_0x5b40('0x2c')](_0x5b40('0x3b'));strTextBaoCao+=_0x5b40('0x3f')+_0x19a2f5+'>'+_0x5b40('0x40')+_0x19a2f5+'>'+_0x19a2f5+'</strong>';strTextBaoCao+=_0x5b40('0x41')+_0x961106+_0x5b40('0x42')+_0x5b40('0x43');}}});}return;});document[_0x5b40('0x7')](_0x5b40('0x8'))[_0x5b40('0x9')][_0x5b40('0xc')](_0x5b40('0xb'));strTextThongTinSV+=_0x5b40('0x44');strTextCongTy+=_0x5b40('0x45');strTextThoiGian=_0x5b40('0x46');strTextBaoCao+=_0x5b40('0x47');bootbox[_0x5b40('0x48')]({'message':strTextThongTinSV+strTextCongTy+strTextThoiGian+strTextBaoCao,'size':_0x5b40('0x49')});addClassnameTUAN();getTime();})[_0x5b40('0x35')](function(_0x1b75eb){});});}function addClassnameTUAN(){var _0xb74a62=[_0x5b40('0x4a'),_0x5b40('0x4b'),_0x5b40('0x4c'),'tuan-bon',_0x5b40('0x4d'),_0x5b40('0x4e'),_0x5b40('0x4f'),_0x5b40('0x50'),_0x5b40('0x51'),'tuan-muoi',_0x5b40('0x52'),_0x5b40('0x53')];for(var _0x160bab=0x0;_0x160bab<_0xb74a62[_0x5b40('0x11')];_0x160bab++){document['getElementById'](_0xb74a62[_0x160bab])['setAttribute']('id',_0x160bab);}setTenTuan();$(_0x5b40('0x54'))[_0x5b40('0x55')](function(_0x36bef9,_0x1e5832){return parseInt(_0x36bef9['id'])-parseInt(_0x1e5832['id']);})[_0x5b40('0x56')](function(){var _0x46c691=$(this);_0x46c691[_0x5b40('0xa')]();$(_0x46c691)[_0x5b40('0x57')](_0x5b40('0x58'));});}function setTenTuan(){var _0xa7bff0=new Array(_0x5b40('0x59'),_0x5b40('0x5a'),'Tuần\x203:',_0x5b40('0x5b'),_0x5b40('0x5c'),_0x5b40('0x5d'),_0x5b40('0x5e'),'Tuần\x208:',_0x5b40('0x5f'),_0x5b40('0x60'),'Tuần\x2011:',_0x5b40('0x61'));var _0x3941f5=[_0x5b40('0x4a'),_0x5b40('0x4b'),_0x5b40('0x4c'),_0x5b40('0x62'),_0x5b40('0x4d'),_0x5b40('0x4e'),_0x5b40('0x4f'),_0x5b40('0x50'),_0x5b40('0x51'),_0x5b40('0x63'),_0x5b40('0x52'),_0x5b40('0x53')];for(var _0x21ba0a=0x0;_0x21ba0a<_0xa7bff0[_0x5b40('0x11')];_0x21ba0a++){document[_0x5b40('0x0')](_0x3941f5[_0x21ba0a])['innerHTML']=_0xa7bff0[_0x21ba0a];}}function getTime(){$(_0x5b40('0x64'))['html']('');var _0x4bf3e6=[_0x5b40('0x65'),'3'];_0x4bf3e6[_0x5b40('0x16')](function(_0x3cbb3d){$[_0x5b40('0x39')](_0x5b40('0x17'),_0x3cbb3d)[_0x5b40('0x18')](function(_0x3938f6){var _0x56a12b,_0x403ce0;var _0x5993ac=0x0;_0x3938f6[_0x5b40('0x16')](function(_0x1cca2f){_0x5993ac++;Object['getOwnPropertyNames'](_0x1cca2f)[_0x5b40('0x16')](function(_0x10ea5c){if(_0x10ea5c==_0x5b40('0x26'))_0x56a12b=_0x1cca2f[_0x10ea5c];else if(_0x10ea5c=='sotuanthuchien')_0x403ce0=_0x1cca2f[_0x10ea5c];});return;});if(_0x5993ac==0x0){$(_0x5b40('0x64'))[_0x5b40('0x14')]('Lỗi');}else{addThongtintuan(_0x56a12b,_0x403ce0);}})[_0x5b40('0x35')](function(_0x4a8580){});});}function addThongtintuan(_0x551058,_0x3e949f){var _0xc2439d,_0x5d71a8;var _0x2798f4;var _0x369fc0=[];var _0x2e329a=_0x551058['split']('/');var _0x551058=new Date(_0x2e329a[0x2],_0x2e329a[0x1]-0x1,_0x2e329a[0x0]);_0x551058=new Date(_0x551058[_0x5b40('0x66')](_0x551058[_0x5b40('0x67')]()-0x7));for(var _0x5b00a6=0x0;_0x5b00a6<_0x3e949f;_0x5b00a6++){_0x2798f4=[];_0x2798f4[_0x5b40('0x68')](_0x5b40('0x69')+(_0x5b00a6+0x1));_0xc2439d=new Date(_0x551058[_0x5b40('0x66')](_0x551058[_0x5b40('0x67')]()+0x7));_0x2798f4[_0x5b40('0x68')](_0x5b40('0x6a')+_0xc2439d[_0x5b40('0x6b')]('vi-VN'));_0x5d71a8=new Date(_0xc2439d['setDate'](_0xc2439d[_0x5b40('0x67')]()+0x6));_0x2798f4[_0x5b40('0x68')]('Đến\x20'+_0x5d71a8[_0x5b40('0x6b')](_0x5b40('0x6c')));_0x369fc0[_0x5b40('0x68')](_0x2798f4);}var _0x1888fa=document['getElementById'](_0x5b40('0x6d'));for(var _0x5b00a6=0x0;_0x5b00a6<_0x369fc0[_0x5b40('0x11')];_0x5b00a6++){var _0x575e56=_0x1888fa[_0x5b40('0x6e')](_0x1888fa[_0x5b40('0x11')]);for(var _0xac84c8=0x0;_0xac84c8<_0x369fc0[_0x5b00a6][_0x5b40('0x11')];_0xac84c8++){var _0x5179de=_0x575e56[_0x5b40('0x6f')](_0xac84c8);_0x5179de[_0x5b40('0x70')]=_0x369fc0[_0x5b00a6][_0xac84c8];}}}