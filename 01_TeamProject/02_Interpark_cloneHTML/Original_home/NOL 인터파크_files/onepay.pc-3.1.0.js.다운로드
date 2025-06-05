/**
 * Author:     Payment Development Team (I3081@interpark.com)
 * Date:    2021.02.10
 * File:     onepay.pc-3.0.0.js
 */
var _ONEPAY_ROOT_URL = "https://onepay-pay.interpark.com";
var _ONEPAY_CARD_URL = "/pc/shopping/card";
var _ONEPAY_BANK_URL = "/pc/shopping/bank";
var _ONEPAY_PAY_URL = "/pc/shopping/pay";
var _ONEPAY_MYPAGE_URL = "/pc/shopping/mypage";
var _ONEPAY_CHG_PAY_URL = "/pc/shopping/chgPay";
var _ONEPAY_SIMPLE_CARD_REG_URL = "/pc/shopping/simple_card";
var _ONEPAY_PAYMENT_URL = "/pc/shopping/paymentReg";

var _ONEPAY_RENEW_MYPAGE_URL = "/pc/shopping/mypageRenew";

var LayerWidth = 450; //onepay 퍼플리싱 min-width : 450, max-width : 890
var LayerHeight = 625;

var onepayPopup;

var Agent = {
	        ua: function(){ return navigator.userAgent.toLowerCase(); },
	        isIE7: function(){ return this.ua().indexOf("msie 7") > -1 },
	        isIE6: function(){ return this.ua().indexOf("msie 6") > -1 },
	        isANDROID: function(){ return this.ua().indexOf("android") > -1 },
			    isIPHONE: function(){ return this.ua().indexOf("iphone") > -1 },
			    isIPAD: function(){ return this.ua().indexOf("ipad") > -1 },
	        isWIN7: function(){ return this.ua().indexOf("windows nt 6.1") > -1 },
			    isIE: function(){ var flag = false; if(this.ua().indexOf("msie") > -1 || this.ua().indexOf("rv:11.0") > -1){flag = true;} return flag;
	}
};

function AdditionalScriptLoad() {
	
	if (typeof window.postMessage == 'undefined') {
		
    }else{
    	
    	if(window.addEventListener){
            window.addEventListener("message", function(e) {
            	if(typeof e.data == 'string'){
	            	var data = (e.data).split("|");
	            	var method, param;
	            	if(data.length == 2){
	            		method = data[0];
	            		param = data[1];
	            	}else{
	            		method = data[0];
	            	}
	
	            	if (method == "OnepayBankReg") Onepay.initLayerPopup(param, _ONEPAY_BANK_URL); //계좌가입
	                else if (method == "OnepayCardReg") Onepay.initLayerPopup(param, _ONEPAY_CARD_URL); //카드가입
	                else if (method == "OnepayAddBank") Onepay.initLayerPopup(param, _ONEPAY_BANK_URL); //계좌추가
	                else if (method == "OnepayAddCard") Onepay.initLayerPopup(param, _ONEPAY_CARD_URL); //카드추가
	                else if (method == "OnepayMypageBank") Onepay.initLayerPopup(param, _ONEPAY_MYPAGE_URL); //마이페이지 계좌관리       
	                else if (method == "OnepayMypageCard") Onepay.initLayerPopup(param, _ONEPAY_MYPAGE_URL); //마이페이지 카드관리  
	                else if (method == "OnepayCloseForm") Onepay.closeLayerPopup();
	                else if (method == "onepaySettingSuccess") onepaySettingSuccess(param); //마이페이지 설정 완료
	                else if (method == "OnepaySuccess") OnepaySuccess(param);
	                else if (method == "OnepaySelectBank") OnepaySelectBank(param); //주문서 계좌변경
	                else if (method == "OnepaySelectCard") OnepaySelectCard(param); //주문서 카드변경
	                else if (method == "OnepaySetBankPaykey") OnepaySetBankPaykey(param); //주문서 호출시 계좌 paykey 부모창에 setting
	                else if (method == "OnepaySetCardPaykey") OnepaySetCardPaykey(param); //주문서 호출시 카드 paykey 부모창에 setting
	                else if (method == "OnepayBankPayAuthSuccess") OnepayPayAuthSuccess(param); //계좌결제
	                else if (method == "OnepayCardPayAuthSuccess") OnepayPayAuthSuccess(param); //카드결제
	                else if (method == "OnepayPayAuthError") OnepayPayAuthError(param); //인증시 에러
	                else if (method == "OnepaySetCardIstmMcnt") OnepaySetCardIstmMcnt(param); //카드 선택시 결제 개월 수 변경
	                else if (method == "OnepayIframeWidth") setIframeWidth(param);
	                else if (method == "OnepaySelectPayment") OnepaySelectPayment(param);
	                else if (method == "OnepaySuccessCallback") OnepaySuccessCallback();
	                else if (method == "OnepayErrorCallback") OnepayErrorCallback(param);
	                else if (method == "OnepayChangedErrorCallback") OnepayChangedErrorCallback(param);
	                else if (method == "OnepayIframeReload") Onepay.reloadFrame();
	                else if (method == "OnepayPayCancel") OnepayPayCancel(param);
	                else if (method == "OnepayRedirectUrl") OnepayRedirectUrl(param);
	                else if (method == "OnepaySimpleCardReg") Onepay.initLayerPopup(param, _ONEPAY_SIMPLE_CARD_REG_URL); //바로 원페이카드등록
					else if (method == "OnepayAddPayment") Onepay.initLayerPopup(param, _ONEPAY_PAYMENT_URL); //결제수단등록 Renew
					else if (method == "OnepayOrderMypage")Onepay.orderMypageReNewPopup(param, _ONEPAY_RENEW_MYPAGE_URL); //주문서에서 원페이 결제수단관리 호출
            	}
            }, false);
            
        }else if(window.attachEvent){
        	window.attachEvent("onmessage", function(e) {
        		if(typeof e.data == 'string'){
	        		var data = (e.data).split("|");
	            	var method, param;
	            	if(data.length == 2){
	            		method = data[0];
	            		param = data[1];
	            	}else{
	            		method = data[0];
	            	}
	            	
	            	if (method == "OnepayBankReg") Onepay.initLayerPopup(param, _ONEPAY_BANK_URL); //계좌가입
	                else if (method == "OnepayCardReg") Onepay.initLayerPopup(param, _ONEPAY_CARD_URL); //카드가입
	                else if (method == "OnepayAddBank") Onepay.initLayerPopup(param, _ONEPAY_BANK_URL); //계좌추가
	                else if (method == "OnepayAddCard") Onepay.initLayerPopup(param, _ONEPAY_CARD_URL); //카드추가
	                else if (method == "OnepayMypageBank") Onepay.initLayerPopup(param, _ONEPAY_MYPAGE_URL); //마이페이지 계좌관리       
	                else if (method == "OnepayMypageCard") Onepay.initLayerPopup(param, _ONEPAY_MYPAGE_URL); //마이페이지 카드관리  
	                else if (method == "OnepayCloseForm") Onepay.closeLayerPopup();
	                else if (method == "onepaySettingSuccess") onepaySettingSuccess(param); //마이페이지 설정 완료
	                else if (method == "OnepaySuccess") OnepaySuccess(param);
	                else if (method == "OnepaySelectBank") OnepaySelectBank(param); //주문서 계좌변경
	                else if (method == "OnepaySelectCard") OnepaySelectCard(param); //주문서 카드변경
	                else if (method == "OnepaySetBankPaykey") OnepaySetBankPaykey(param); //주문서 호출시 계좌 paykey 부모창에 setting
	                else if (method == "OnepaySetCardPaykey") OnepaySetCardPaykey(param); //주문서 호출시 카드 paykey 부모창에 setting
	                else if (method == "OnepayBankPayAuthSuccess") OnepayPayAuthSuccess(param); //계좌결제
	                else if (method == "OnepayCardPayAuthSuccess") OnepayPayAuthSuccess(param); //카드결제
	                else if (method == "OnepayPayAuthError") OnepayPayAuthError(param); //인증시 에러
	                else if (method == "OnepaySetCardIstmMcnt") OnepaySetCardIstmMcnt(param); //카드 선택시 결제 개월 수 변경
	                else if (method == "OnepayIframeWidth") setIframeWidth(param);
	                else if (method == "OnepaySelectPayment") OnepaySelectPayment(param);
	                else if (method == "OnepaySuccessCallback") OnepaySuccessCallback();
	                else if (method == "OnepayErrorCallback") OnepayErrorCallback(param);
	                else if (method == "OnepayChangedErrorCallback") OnepayChangedErrorCallback(param);
	                else if (method == "OnepayIframeReload") Onepay.reloadFrame();
	                else if (method == "OnepayPayCancel") OnepayPayCancel(param);
	                else if (method == "OnepayRedirectUrl") OnepayRedirectUrl(param);
					else if (method == "OnepayAddPayment") Onepay.initLayerPopup(param, _ONEPAY_PAYMENT_URL); //결제수단등록 Renew
					else if (method == "OnepayOrderMypage")Onepay.orderMypageReNewPopup(param, _ONEPAY_RENEW_MYPAGE_URL); //주문서에서 원페이 결제수단관리 호출
        		}
            });
        }
    }
}

function setIframeWidth(width){
	if(width != LayerWidth){
		$('iframe[id=onepayFrame]').attr('width', width);
		LayerWidth = width;
		
		var _W = $(window).width();
		var w = Math.floor((_W/2) - (LayerWidth/2) + $(window).scrollLeft());
		
		$("#onepayDiv").css("left",(w / _W) * 100+"%");
	}
	
}

var callBack;

var _layerId='';
var _mid='';
var _ifCd='';
var _mchtNo='';
var _userNo='';
var _cardCode = '';
var _ordNo = '';
var _trSmtlAmt='';
var _prodName = '';
var _prodCnt = '';
var _payKind='';
var _onlyCardCode='';
var _quotabase='';
var _cardInfo='';
var _nointerest='';
var _ipEvent='';
var _rqDtime='';
var _sign='';
var _bankIframeId='';
var _cardIframeId='';
var _onepayIframeId='';

var _successCallBack='';
var _errorCallBack='';
var _changedErrorCallBack='';
var _eventCallBack='';
var _payAuthSeccessCallBack='';
var _payAuthErrorCallBack='';

var _reTrSmtlAmt='';
var _rePayKind='';
var _reOnlyCardCode='';

var _reloadFlag = false;
var _height = 0;

var _closeCallbackForLayer = '';
var _regCallbackForLayer = '';
var _errorCallbackForLayer = '';
var Onepay = {
		
		setHeight: function(height){
			_height = height;
		},
		
		//주문서 layer popup div id
		setLayerId: function(layerId){
			_layerId = layerId;
		},
		
		setSuccessCallBack: function(callback){
			_successCallBack = callback;
		},
		
		setErrorCallBack: function(callback){
			_errorCallBack = callback;
		},
		
		setEventCallBack: function(callback){
			_eventCallBack = callback;
		},
		
		setPayAuthCallBack: function(successCallback, errorCallback){
			_payAuthSeccessCallBack = successCallback;
			_payAuthErrorCallBack = errorCallback;
		},
		
		setMid: function(mid){
			_mid = mid;
		},
		
		setIfcd: function(ifCd){
			_ifCd = ifCd;
		},
		
		setMchtNo: function(mchtNo){
			_mchtNo = mchtNo;
		},
		
		setUserNo: function(userNo){
			_userNo = userNo;
		},
		
		setCardCode: function(cardCode){
			_cardCode = cardCode;
		},
		
		setOrdNo: function(ordNo){
			_ordNo = ordNo;
		},

		setProdName: function(prodName){
			_prodName = prodName;
		},

		setProdCnt: function(prodCnt){
			_prodCnt = prodCnt;
		},

		setTrSmtlAmt: function(trSmtlAmt){
			_trSmtlAmt = trSmtlAmt;
			_reTrSmtlAmt = trSmtlAmt;
		},
		
		setPayKind: function(payKind){
			_payKind = payKind;
			_rePayKind = payKind;
		},
		
		setOnlyCardCode: function(onlyCardCode){
			_onlyCardCode = onlyCardCode;
			_reOnlyCardCode = onlyCardCode;
		},
		
		setQuotaBase: function(quotabase){
			_quotabase = quotabase;
		},
		
		setCardInfo: function(cardInfo){
			_cardInfo = cardInfo;
		},
		
		setNoInterest: function(nointerest){
			_nointerest = nointerest;
		},
		
		setIpEvent: function(ipEvent){
			_ipEvent = ipEvent;
		},
		
		setRqDtime: function(rqDtime){
			_rqDtime = rqDtime;
		},
		
		setSign: function(sign){
			_sign = sign;
		},
		
		createFrame : function(onepayIframeId){
			_ifCd = "OPIF-PAY-301";
			_onepayIframeId = onepayIframeId;

			this.createOrderIframe(onepayIframeId);
		},
		
		reTrSmtlAmt:function(trSmtlAmt){
			_reTrSmtlAmt = trSmtlAmt;
			var onepayIframe = document.getElementById("onepayCreateIframe");
			if(onepayIframe != null) onepayIframe.contentWindow.postMessage("reTrSmtlAmt|"+_reTrSmtlAmt, "*");
		},
		
		rePayKind:function(payKind){
			_rePayKind = payKind;
			var onepayIframe = document.getElementById("onepayCreateIframe");
			if(onepayIframe != null) onepayIframe.contentWindow.postMessage("rePayKind|"+_rePayKind, "*");
		},
		
		reOnlyCardCode:function(onlyCardCode){
			_reOnlyCardCode = onlyCardCode;
			var onepayIframe = document.getElementById("onepayCreateIframe");
			if(onepayIframe != null) onepayIframe.contentWindow.postMessage("reOnlyCardCode|"+_reOnlyCardCode, "*");
		},
		
		reloadFrame : function(){
			this.reTrSmtlAmt(_reTrSmtlAmt);
			this.rePayKind(_rePayKind);
			this.reOnlyCardCode(_reOnlyCardCode);
			this.orderInfoChanged();
		},
	
		orderInfoChanged: function(errorCallback){
			if(errorCallback == undefined || errorCallback == ""){
				_changedErrorCallBack = _errorCallBack;
			}else{
				_changedErrorCallBack = errorCallback;
			}
			
			var onepayIframe = document.getElementById("onepayCreateIframe");
			if(onepayIframe != null) onepayIframe.contentWindow.postMessage("orderInfoChanged|", "*");
		},
		
		//주문서 로딩 시 iframe 안에 onepay 화면 로딩
		createOrderIframe : function(id){
			
			var tempFrm = $("#onepayCreateForm");
			var tempIframe = $("#onepayCreateIframe");
			
			//form 지우고 시작
			if(tempFrm) tempFrm.remove();
			if(tempIframe)tempIframe.remove();
			
			//iframe 생성 후 Onepay 화면 노출
			this.initOrderIFramePopup(id);
		    
		},
		
		initOrderIFramePopup : function(id){
			
			//쇼핑 주문서 Iframe 계좌, 카드 불러오기
			var orderIframe = document.getElementById(id);
			
			var opfrm = document.createElement("form");
			opfrm.setAttribute("id", "onepayCreateForm");
			opfrm.setAttribute("name", "onepayCreateForm");
			opfrm.setAttribute("method", "post");
			opfrm.setAttribute("target", "onepayCreateIframe");
			opfrm.setAttribute("action", _ONEPAY_ROOT_URL + "/shopping");
			orderIframe.appendChild(opfrm);
			
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_iframe_if_cd', _ifCd));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_iframe_mcht_no', _mchtNo));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_iframe_user_no', _userNo));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_iframe_tr_smtl_amt', _trSmtlAmt));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_iframe_onlycardcode', _onlyCardCode));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_iframe_pay_type_cd', _payKind));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_iframe_quotabase', _quotabase));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_iframe_cardInfo', _cardInfo));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_iframe_rq_dtime', _rqDtime));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_iframe_sign', _sign));
			
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_error_callback', 'Y'));
			
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_iframe_reload', _reloadFlag));
			
			var style = document.createElement("iframe");
		    style.setAttribute("class", "onepayment");
		    style.setAttribute("id", "onepayCreateIframe");
		    style.setAttribute("name", "onepayCreateIframe");
		    style.setAttribute("width", "515");
		    style.setAttribute("height", "275");
		    style.setAttribute("frameborder", "0");
		    style.setAttribute("allowfullscreen", "");

		    //주문서 iframe 세로 size(수정가능)
		    if(_height == 0){
		    	style.setAttribute("height", "275");
		    }else{
		    	style.setAttribute("height", _height);
		    }
		    
		    orderIframe.appendChild(style);
		    
		    opfrm.submit();
		},
				
		initLayerPopup : function(param, url){

			console.log("[onepay.pc.3.1.0] [initLayerPopup() value : {}]" + param);
			var ieChkFlag = Agent.isIE();
			ieChkFlag = false;
			if(ieChkFlag) {
				//layerPopup 삭제 후 재설정
				$("#" + _layerId).children().remove();
				$("#" + _layerId).hide();

				var onepay_layer = document.getElementById(_layerId);

				//주문서 안에 onepay LayerPopup 영역 hide
				onepay_layer.style.display = 'none';

				//주문서 전체 dim 처리
				this.createLayerDim(onepay_layer);

				//layerPopup form 생성
				var onepayForm = this.createLayerPopupForm(onepay_layer, param, url);

				//layerPopup iframe 생성
				this.createLayerPopupIFrame();

				//layerPopup submit
				onepayForm.submit();

				//주문서 안에 onepay LayerPopup 영역 show
				onepay_layer.style.display = 'block';

				//전체 창 스크롤 숨김
				$('body').css({'overflow': 'hidden'});
			}else{

				let onepay_layer = document.getElementById(_layerId);
				//layerPopup form 생성
				let onepayForm = this.createPopupForm(onepay_layer, param, url);
				window.name = "onepayPopup";

				/*const reNewVersion = $('#onepayCreateForm').find("#onepay_renew_ver").val();
				console.log("onepay.pc-3.0.0.js initLayerPopup reNewVersion value : ", reNewVersion);*/
				const reNewWord = "paymentReg";
				if(url.match(reNewWord)){
					onepayPopup = window.open("", "onepayPayment", "height=735, width=375, titlebar=no,fullscreen=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,left=150,top=50");
				}else{
					onepayPopup = window.open("", "onepayPayment", "height=680, width=500, titlebar=no,fullscreen=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,left=150,top=50");
				}
				onepayForm.submit();
			}
		},

		createPopupForm : function(onepay_layer, param, url){
			if(url == undefined || url == '' || url == null || url == 'undefined'){
				url = "/shopping";
			}

			let opfrm = document.createElement("form");
			opfrm.setAttribute("id", "onepayCreateForm");
			opfrm.setAttribute("name", "onepayCreateForm");
			opfrm.setAttribute("method", "post");
			opfrm.setAttribute("target", "onepayPayment");
			opfrm.setAttribute("action", _ONEPAY_ROOT_URL + url);

			//param에 넘어온 쿼리스트링을 input hidden 으로 생성
			if(param != null){
				let data = param.split("&");
				for(let i = 0 ; i < data.length ; i++){
					let tmp = data[i].split("=");
					opfrm.appendChild(this.createLayerPopupFormInput(tmp[0], tmp[1]));
				}

				let popupInput = document.createElement("input");
				popupInput.setAttribute("type", "hidden");
				popupInput.setAttribute("name", "submitFlag");
				popupInput.setAttribute("id", "submitFlag");
				popupInput.setAttribute("value", "Y");
				opfrm.appendChild(popupInput);
			}
			onepay_layer.appendChild(opfrm);
			return opfrm;
		},

		createLayerDim : function(onepay_layer){

			var opdim = document.createElement("div");
			opdim.setAttribute("id", "opdim");
			opdim.setAttribute("name", "opdim");
			opdim.setAttribute("style", "background-color: #000; width:100%; height:"+document.body.scrollHeight+"px; z-index:100000; "
				+"position:fixed; top:0px; left:0px; filter: alpha(Opacity:40) !important; opacity: 0.4 !important; "+
				+"-webkit-opacity: 0.4!important; filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);");

			onepay_layer.appendChild(opdim);
		},
		
		createLayerPopupForm : function(onepay_layer, param, url){

			if(url == undefined || url == '' || url == null || url == 'undefined'){
				url = "/shopping";
			}
			
			var opfrm = document.createElement("form");
			opfrm.setAttribute("id", "onepayCreateForm");
			opfrm.setAttribute("name", "onepayCreateForm");
			opfrm.setAttribute("method", "post");
			opfrm.setAttribute("target", "onepayFrame");
			opfrm.setAttribute("action", _ONEPAY_ROOT_URL + url);
			
			//param에 넘어온 쿼리스트링을 input hidden 으로 생성
			if(param != null){
				var data = param.split("&");
				for(var i = 0 ; i < data.length ; i++){
					var tmp = data[i].split("=");
					opfrm.appendChild(this.createLayerPopupFormInput(tmp[0], tmp[1]));
				}
			}
			
			onepay_layer.appendChild(opfrm);
			
			return opfrm;
		},

		createLayerPopupFormInput : function(key, val){
			
			var onepayFormInput = document.createElement("input");
			
			onepayFormInput.setAttribute("type", "hidden");
			onepayFormInput.setAttribute("name", key);
			onepayFormInput.setAttribute("id", key);
			onepayFormInput.setAttribute("value", val);
			
			return onepayFormInput;
		},
		
		createLayerPopupIFrame : function(){
			const reNewVersion = $('#onepayForm').find('[name="onepay_renew_ver"]').val();
			if(reNewVersion == '2021'){
				//height=735,width=375
				LayerWidth = 375;
				LayerHeight = 735;
			}

			var onepay_layer = document.getElementById(_layerId);
			
			var _W = $(window).width();
			var w = Math.floor((_W/2) - (LayerWidth/2) + $(window).scrollLeft());
			
			var _T = window.innerHeight;
			if(_T == undefined) _T = $(window).height();
			
			var t = Math.floor((_T-LayerHeight)/2);
			
			var style = document.createElement("iframe");
		    style.setAttribute("frameborder", "0");
		    style.setAttribute("scrolling", "no");
		    style.setAttribute("id", "onepayFrame");
		    style.setAttribute("name", "onepayFrame");
		    style.setAttribute("width", LayerWidth);
		    style.setAttribute("height", LayerHeight);
		    style.setAttribute("align", "center");
		    
		    var ifrDiv = document.createElement("div");
		    ifrDiv.setAttribute("id", "onepayDiv");
		    ifrDiv.setAttribute("style","height:"+LayerHeight+"px; position:fixed; top:"+ (t / _T) * 100 +"%; left:"+(w / _W) * 100+"%; z-index :100001; background-color: #fff;");
		    ifrDiv.appendChild(style);
		    
		    onepay_layer.appendChild(ifrDiv);
		    
		    //브라우져 사이즈 변화 할때 마다 센터로
		    $(window).resize(function() {
		    	
		    	var onepayDiv = document.getElementById('onepayDiv');
		    	if(onepayDiv != null){
			    	var _W = $(window).width();
			    	var w = Math.floor((_W/2) - (LayerWidth/2) + $(window).scrollLeft());
			    	
			    	var _T = window.innerHeight;
					if(_T == undefined) _T = $(window).height();
					
					var t = Math.floor((_T-LayerHeight)/2);
			    	
			    	$('#onepayDiv').css('top', ( t / _T) * 100 + "%" );
			        $('#onepayDiv').css('left', ( w / _W) * 100 + "%" );
		    	}
		        
		    });
		},

		pay : function(onepayFormId){
			//alert("onepay.pc-3.0.0.js pay onepayFormId : " + onepayFormId);
			//if(Agent.isIE()) {
			var ieChkFlag = Agent.isIE();
			ieChkFlag = false;
			if(ieChkFlag) {
				$("#"+_layerId).children().remove();
				$("#"+_layerId).hide();

				var onepay_layer = document.getElementById(_layerId);

				//주문서 안에 onepay LayerPopup 영역 hide
				onepay_layer.style.display = 'none';

				//주문서 전체 dim 처리
				this.createLayerDim(onepay_layer);

				//layerPopup으로 보낼 target, action 생성
				//onepay_pay_error_callback
				$("#"+onepayFormId).attr("target", "onepayFrame");
				$("#"+onepayFormId).attr("action", _ONEPAY_ROOT_URL+_ONEPAY_PAY_URL+"?if_cd=OPIF-PAY-201&onepay_pay_error_callback=Y");

				//layerPopup iframe 생성
				this.createLayerPopupIFrame();

				$("#"+onepayFormId).submit();

				//주문서 안에 onepay LayerPopup 영역 show
				onepay_layer.style.display = 'block';
			}else{
				let $onepayForm = document.getElementsByName(onepayFormId)[0];
				$onepayForm.setAttribute("target", "onepayPayment");
				$onepayForm.setAttribute("action", _ONEPAY_ROOT_URL+_ONEPAY_PAY_URL+"?if_cd=OPIF-PAY-201&onepay_pay_error_callback=Y");
				let $input = document.createElement('input');
				$input.setAttribute("type", "hidden");
				$input.setAttribute("name", "submitFlag");
				$input.setAttribute("value", "Y");
				$input.setAttribute("type", "hidden");
				$onepayForm.appendChild($input);
				window.name = "onepayPopup";

				const reNewVersion = $('#onepayForm').find('[name="onepay_renew_ver"]').val();
				console.log("onepay.pc-3.0.0.js pay reNewVersion value : ", reNewVersion);

				if(reNewVersion == '2021'){
					onepayPopup = window.open("", "onepayPayment", "height=735,width=375,titlebar=no,fullscreen=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,left=150,top=50");
				}else{
					onepayPopup = window.open("", "onepayPayment", "height=680,width=500,titlebar=no,fullscreen=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,left=150,top=50");
				}
				$onepayForm.submit();
			}
		},
		
		callMypageBankIframe : function(id){
			var mypage_type = "bank";
			this.createMypageIframe(id, mypage_type);
		},
		
		callMypageCardIframe : function(id){
			var mypage_type = "card";
			this.createMypageIframe(id, mypage_type);
		},
		
		createMypageIframe : function(id, mypage_type){
			
			var tempFrm_card = $("#onepay_card_form");
			var tempIframe_card = $("#onepay_card_iframe");
			var tempFrm_bank = $("#onepay_bank_form");
			var tempIframe_bank = $("#onepay_bank_iframe");
			
			//form 지우고 시작
			if(tempFrm_card) tempFrm_card.remove();
			if(tempFrm_bank) tempFrm_bank.remove();
			if(tempIframe_card) tempIframe_card.remove();
			if(tempIframe_bank) tempIframe_bank.remove();
			
			var mypageIframe = document.getElementById(id);
			
			var opfrm = document.createElement("form");
			opfrm.setAttribute("id", "onepay_"+mypage_type+"_form");
			opfrm.setAttribute("name", "onepay_"+mypage_type+"_form");
			opfrm.setAttribute("method", "post");
			opfrm.setAttribute("target", "onepay_"+mypage_type+"_iframe");
			opfrm.setAttribute("action", _ONEPAY_ROOT_URL + _ONEPAY_MYPAGE_URL);
			mypageIframe.appendChild(opfrm);
			
			opfrm.appendChild(this.createLayerPopupFormInput('if_cd', _ifCd));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_mcht_no', _mchtNo));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_user_no', _userNo));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_rq_dtime', _rqDtime));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_sign', _sign));
			opfrm.appendChild(this.createLayerPopupFormInput('op_type', mypage_type));
			
			var style = document.createElement("iframe");
		    style.setAttribute("frameborder", "0");
		    style.setAttribute("allowfullscreen", "");
		    style.setAttribute("id", "onepay_"+mypage_type+"_iframe");
		    style.setAttribute("name", "onepay_"+mypage_type+"_iframe");
		    style.setAttribute("width", "100%");
		    style.setAttribute("height", document.body.scrollHeight);
		    style.setAttribute("frameborder", "0");
		    style.setAttribute("scrolling", "no");
		    style.setAttribute("marginheight", "0");
		    style.setAttribute("marginwidth", "0");
		    
		    mypageIframe.appendChild(style);
		    
		    opfrm.submit();
		},
		
		openCardManagement : function(){
			this.mypagePopup("card");
		},
		
		openBankManagement : function(){
			this.mypagePopup("bank");
		},

		openOnePayManagement : function(){
			this.mypageReNewPopup("");
		},
		
		mypagePopup: function(type){

			var onepay_layer = document.getElementById(_layerId);

			var opfrm = document.createElement("form");
			opfrm.setAttribute("id", "onepayCreateForm");
			opfrm.setAttribute("name", "onepayCreateForm");
			opfrm.setAttribute("method", "post");
			opfrm.setAttribute("target", "onepayMypageFrame");
			opfrm.setAttribute("action", _ONEPAY_ROOT_URL + _ONEPAY_MYPAGE_URL);
			onepay_layer.appendChild(opfrm);
			
			opfrm.appendChild(this.createLayerPopupFormInput('if_cd', "OPIF-PAY-401"));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_mcht_no', _mchtNo));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_user_no', _userNo));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_rq_dtime', _rqDtime));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_sign', _sign));

			opfrm.appendChild(this.createLayerPopupFormInput('submitFlag', "Y"));

			/*if(!Agent.isIE()) {
				opfrm.appendChild(this.createLayerPopupFormInput('submitFlag', "Y"));
			}*/

			opfrm.appendChild(this.createLayerPopupFormInput('op_type', type));
			
			window.open("" ,"onepayMypageFrame","toolbar=no, width="+LayerWidth+", height="+LayerHeight+", directories=no, status=no, scrollorbars=no, resizable=no");
		    opfrm.submit();
		    
		},

		mypageReNewPopup: function(type){

			LayerHeight = 735;
			LayerWidth = 375;

			var onepay_layer = document.getElementById(_layerId);

			var opfrm = document.createElement("form");
			opfrm.setAttribute("id", "onepayCreateForm");
			opfrm.setAttribute("name", "onepayCreateForm");
			opfrm.setAttribute("method", "post");
			opfrm.setAttribute("target", "onepayMypageFrame");
			opfrm.setAttribute("action", _ONEPAY_ROOT_URL + _ONEPAY_RENEW_MYPAGE_URL);
			onepay_layer.appendChild(opfrm);

			opfrm.appendChild(this.createLayerPopupFormInput('if_cd', "OPIF-PAY-402"));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_mcht_no', _mchtNo));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_user_no', _userNo));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_rq_dtime', _rqDtime));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_sign', _sign));

			opfrm.appendChild(this.createLayerPopupFormInput('submitFlag', "Y"));

			/*if(!Agent.isIE()) {
				opfrm.appendChild(this.createLayerPopupFormInput('submitFlag', "Y"));
			}*/

			opfrm.appendChild(this.createLayerPopupFormInput('reNewVersion', "2021"));

			window.open("" ,"onepayMypageFrame","toolbar=no, width="+LayerWidth+", height="+LayerHeight+", directories=no, status=no, scrollbars=yes, resizable=no");
			opfrm.submit();

		},

		orderMypageReNewPopup : function(param, url){
			LayerHeight = 735;
			LayerWidth = 375;
			var onepay_layer = document.getElementById(_layerId);
			let opfrm = document.createElement("form");
			opfrm.setAttribute("id", "onepayCreateForm");
			opfrm.setAttribute("name", "onepayCreateForm");
			opfrm.setAttribute("method", "post");
			opfrm.setAttribute("target", "onepayMypageFrame");
			opfrm.setAttribute("action", _ONEPAY_ROOT_URL + url);

			//param에 넘어온 쿼리스트링을 input hidden 으로 생성
			if(param != null){
				let data = param.split("&");
				for(let i = 0 ; i < data.length ; i++){
					let tmp = data[i].split("=");
					opfrm.appendChild(this.createLayerPopupFormInput(tmp[0], tmp[1]));
				}
			}
			onepay_layer.appendChild(opfrm);
			opfrm.appendChild(this.createLayerPopupFormInput('reNewVersion', "2021"));
			opfrm.appendChild(this.createLayerPopupFormInput('closeReloadYn', "Y"));
			window.open("" ,"onepayMypageFrame","toolbar=no, width="+LayerWidth+", height="+LayerHeight+", directories=no, status=no, scrollbars=yes, resizable=no");
			opfrm.submit();
		},
		
		//20170821 바로원페이카드등록
		simpleCardReg : function(){
			this.simpleCardPopup("card");
		},
		
		simpleCardPopup: function(type){
		
			var onepay_layer = document.getElementById(_layerId);

			var opfrm = document.createElement("form");
			opfrm.setAttribute("id", "onepayCreateForm");
			opfrm.setAttribute("name", "onepayCreateForm");
			opfrm.setAttribute("method", "post");
			opfrm.setAttribute("target", "onepaySpCardRegFrame");
			opfrm.setAttribute("action", _ONEPAY_ROOT_URL + _ONEPAY_SIMPLE_CARD_REG_URL);
			onepay_layer.appendChild(opfrm);
			
			opfrm.appendChild(this.createLayerPopupFormInput('if_cd', "OPIF-PAY-002"));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_mcht_no', _mchtNo));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_user_no', _userNo));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_card_code', _cardCode));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_rq_dtime', _rqDtime));
			opfrm.appendChild(this.createLayerPopupFormInput('onepay_sign', _sign));
			opfrm.appendChild(this.createLayerPopupFormInput('op_type', type));
			
			window.open("" ,"onepaySpCardRegFrame","toolbar=no, width="+LayerWidth+", height="+LayerHeight+", directories=no, status=no, scrollorbars=no, resizable=no");
		    opfrm.submit();
		},
		closeLayerPopup: function(){

			//if(Agent.isIE()) {

			var ieChkFlag = Agent.isIE();
			ieChkFlag = false;
			if(ieChkFlag) {
				//부모 스크롤 허용
				$('body').css({'overflow':''});

				//주문서 내 신용카드, 계좌 iframe reload
				$("#"+_layerId).children().remove();
				$("#"+_layerId).hide();

				if(typeof _closeCallbackForLayer =="function"){
					_closeCallbackForLayer();
				}
			}else{
				_reloadFlag = true;
				Onepay.createFrame(_onepayIframeId);
				onepayPopup.close();
			}
		},
		
		openChangeOnepayLayerPopup: function(successCallback, closeCallback){
			
			_payAuthSeccessCallBack = successCallback;
			_closeCallbackForLayer = closeCallback;
			
			if(_layerId == '' || _layerId == undefined){
				alert("Onepay.setLayerId is null");
				return;
			}else if(_mchtNo == '' || _mchtNo == undefined){
				alert("Onepay.setMchtNo is null");
				return;
			}else if(_userNo == '' || _userNo == undefined){
				alert("Onepay.setUserNo is null");
				return;
			}else if(_ordNo == '' || _ordNo == undefined){
				alert("Onepay.setOrdNo is null");
				return;
			}else if(_trSmtlAmt == '' || _trSmtlAmt == undefined){
				alert("Onepay.setTrSmtlAmt is null");
				return;
			}else if(_prodName == '' || _prodName == undefined){
				alert("Onepay.setProdName is null");
				return;
			}else if(_mid == '' || _mid == undefined){
				alert("Onepay.setMid is null");
				return;
			}else if(_quotabase == '' || _quotabase == undefined){
				alert("Onepay.setQuotaBase is null");
				return;
			}else if(_cardInfo == '' || _cardInfo == undefined){
				alert("Onepay.setCardInfo is null");
				return;
			}else if(_rqDtime == '' || _rqDtime == undefined){
				alert("Onepay.setRqDtime is null");
				return;
			}else if(_sign == '' || _sign == undefined){
				alert("Onepay.setSign is null");
				return;
			}
			
			var param = "onepay_pay_kind="+_payKind
					+"&onepay_mcht_no="+_mchtNo
					+"&onepay_user_no="+_userNo
					+"&onepay_ord_no="+_ordNo
					+"&onepay_tr_smtl_amt="+_trSmtlAmt
					+"&onepay_prod_name="+_prodName
					+"&onepay_prod_cnt="+_prodCnt
					+"&onepay_quotabase="+_quotabase
					+"&onepay_card_info="+_cardInfo
					+"&onepay_mid="+_mid
					+"&onepay_rq_dtime="+_rqDtime
					+"&sign="+_sign;

			this.initLayerPopup(param, _ONEPAY_CHG_PAY_URL);
		}
	
};

function onepaySettingSuccess(type){
	
	Onepay.closeLayerPopup()
	if(type == 'card'){
		onepayCardSetResult();
	}else if(type == 'bank'){
		onepayBankSetResult();
	}
}

function OnepaySuccess(type){
	//if(Agent.isIE()) {
	var ieChkFlag = Agent.isIE();
	ieChkFlag = false;
	if(ieChkFlag) {
		Onepay.closeLayerPopup();
		_reloadFlag = true;
		Onepay.createFrame(_onepayIframeId);
	}else{
		Onepay.closeLayerPopup();
		_reloadFlag = true;
	}
}

function onepay_mypage_card(layerId){ //마이페이지 카드관리 이동
	Onepay.callMypageCardIframe(layerId);
}

function onepay_mypage_bank(layerId){ //마이페이지 계좌관리 이동
	Onepay.callMypageBankIframe(layerId);
}

function OnepaySelectBank(param){ //주문서 계좌변경
	document.getElementById('onepay_bank_iframe').contentWindow.postMessage("OnepayChangeBank|"+param, "*");
	
	//주문서 계좌변경 후 paykey 부모 input 에 넣어줌
	var data = (param).split("&");
	var paykey = data[0];
	document.getElementById('onepay_bank_pay_key').value = paykey;
	
	Onepay.closeLayerPopup();
}

function OnepaySelectCard(param){ //주문서 계좌변경
	document.getElementById('onepay_card_iframe').contentWindow.postMessage("OnepayChangeCard|"+param, "*");
	
	//주문서 계좌변경 후 paykey 부모 input 에 넣어줌
	var data = (param).split("&");
	var paykey = data[0];
	document.getElementById('onepay_card_pay_key').value = paykey;
	
	Onepay.closeLayerPopup();
}

function OnepaySetBankPaykey(paykey){
	document.getElementById('onepay_bank_pay_key').value = paykey;
}

function OnepaySetCardPaykey(paykey){
	document.getElementById('onepay_card_pay_key').value = paykey;
}


function OnepayPayAuthSuccess(param){

	//if(Agent.isIE()){
	var ieChkFlag = Agent.isIE();
	ieChkFlag = false;
	if(ieChkFlag) {
		Onepay.closeLayerPopup();
	}else{
		onepayPopup.close();
		setTimeout(function(){}, 300);
	}
	var data = param.split("&");
	if(typeof _payAuthSeccessCallBack =="function"){
		_payAuthSeccessCallBack(data[0], data[1], data[2], data[3], data[4],
			data[5], data[6], data[7], data[8], data[9],
			data[10], data[11], data[12], data[13], data[14],
			data[15], data[16], data[17], data[18], data[19],
			data[20], data[21], data[22], data[23]);
	}
}


function OnepayPayAuthError(param){
	
	if(typeof _payAuthSeccessCallBack =="function"){
		_payAuthErrorCallBack(param);
	}
}

function OnepaySetCardIstmMcnt(param){
	var data = param.split("&");
	document.getElementById('onepay_istm_mcnt').value = data[0];
	document.getElementById('onepay_no_int_yn').value = data[1];
	
}

function OnepaySuccessCallback(param){
	if(typeof _successCallBack =="function"){
		_successCallBack();
	}
}

function OnepayErrorCallback(param){
	
	if(typeof _errorCallBack =="function"){
		$("#onepayCreateIframe").hide();
		_errorCallBack(param);
	}
}

function OnepayChangedErrorCallback(param){
	if(typeof _changedErrorCallBack =="function"){
		_changedErrorCallBack(param);
	}
}

function OnepaySelectPayment(param){
	var data = param.split("&");
	if(typeof _eventCallBack =="function"){
		_eventCallBack(data[0],data[1],data[2],data[3],data[4],data[5],data[6]);
	}
}

function OnepayPayCancel(param){
	var data = param.split("&");
	onepay_pay_cancel_info(data[0],data[1],data[2],data[3],data[4],data[5],data[6]);
	
	Onepay.closeLayerPopup();
}

function OnepayRedirectUrl(param){
	var data = param.split("&");
	window.open(data[0], '_blank');
}

AdditionalScriptLoad();
