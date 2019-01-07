var app = angular.module('app', ["angucomplete-alt"]);
//var myApp = angular.module('TringMe', []);
//
app.controller('MainController',['$scope','$http','$rootScope', '$window', function MainController($scope,$http,$rootScope, $window) {
		var userAgent = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase();
		var ios = false;
		var android = false;
		var mobile = false;
		$scope.pressquotes = [
			{src:'techcrunch.png', text:"Flash-based Web phones are bringing VOIP calls directly to the browser"}, 
			{src:'zdnet.jpg', text:"Blackberry users get first native VoIP client"}, 
			{src:'gigaom.jpg', text:"VoicePHP – Disruptive in its Simplicity!"},
			{src:'abcnews.png', text:"Phone Calls on Facebook"},
			{src:'iolscitech.jpg', text:"Saving you time, saving you money"}
			];
		$scope.press = [
			'techcrunch.png', 
			'abcnews.png', 
			'cnnmoney.png', 
			'indiatoday.jpg', 
			'theeconomictimes.jpg', 
			'tmcnet.jpg', 
			'zdnet.jpg', 
			'thenewyorktimes.jpg', 
			'times-of-india.jpg',
			'fastcompany.jpg',  
			'outlookmoney.png', 
			'cnbc-tv18.png', 
			'gigaom.jpg', 
			'readwriteweb.png', 
			'thetelegraph.jpg', 
			'usatoday.png', 
			'cnet.png', 
			'washingtonpost.jpg', 
			'tv9.png', 
			'livemint.jpg', 
			'iolscitech.jpg',  
			'phpmaglogo.png', 
			'bangaloremirror.png',  
			'nextbigwhat.jpg'
		];

		if( userAgent.match( /ipad/i ) || userAgent.match( /iphone/i ) || userAgent.match( /ipod/i ) ) {
			ios = true;
			mobile = true;
		} else if(userAgent.match( /android/i )) {
			android = true;
			mobile = true;
		}

		$scope.isAndroid = function() { return android;}
		$scope.isIOS = function() { return ios;}
		$scope.isMobile = function() { return (ios | android);}
		$scope.visibleOnIOS = function() { return (ios | (!ios && !android)); };
		$scope.visibleOnAndroid = function() { return (android | (!ios && !android)); };
		$scope.showEnterprise = function () { return false; }

        /****************************Contact Support*************************************/
		$scope.supportSelectionBoxList = [
                         { id: 0, name: '--- Select the type of problem you are facing ---' },
                         { id: 1, name: 'Unable to Login' },
                         { id: 2, name: 'Phone verfication issue' },
                         { id: 3, name: 'Other Problem' }
		];

		$scope.selectedSupport = $scope.supportSelectionBoxList[0];
		$scope.supportSelectionBoxChange = function (optionL) {
		    $scope.Message = optionL;
		    $scope.$apply();
		};
        /*******************************************************************************/
		$window.show_login_page = function() {};
		$window.show_dashboard = function() {};
		$window.update_contacts = function() {};
		tringme_init(true);

		$scope.loggedin = tringme_isloggedin();
		$scope.logintext = 'Sign in';
		if($scope.loggedin)
			$scope.logintext = 'My Account';
		$scope.showsignup = function () { return !($scope.loggedin)}; 


		$scope.previouscountry = '';
		$scope.rates = {};
		$scope.findrate = function(str) {
			if('undefined' == typeof $scope.selectedCountry)
				return;
			
			//console.log($scope.selectedCountry);
			if('undefined' == typeof $scope.selectedCountry.originalObject)
				return;

			if($scope.previouscountry == $scope.selectedCountry.originalObject.name) 
				return;

			$scope.previouscountry = $scope.selectedCountry.originalObject.name;

			console.log($scope.selectedCountry.originalObject.name);
			$scope.rates = {};
			tringme_getcountryrates(function(r, o, e) {
				if(r && o != undefined && o != null) {
					$scope.rates = o;
					//analytics('send', 'pageview', $scope.selectedCountry.originalObject.name);
					analytics('send', 'event', 'rate', 'country', $scope.selectedCountry.originalObject.name, 0);
					//alert($scope.selectedCountry.originalObject.name);
				}

				$scope.$apply();
			},
			$scope.selectedCountry.originalObject.code);
		};

		
		$scope.findphonerate = function() {
			var elem = document.getElementById("ex1_value");

			//if user presses find rate after selecting country
			if($scope.previouscountry.trim() == elem.value.trim()) 
				return;

			$scope.rates = {};
			tringme_getrate(function(r, o, e) {
				if(r && o != undefined && o != null) {
					$scope.rates = o;
					//analytics('send', 'pageview', o[0].destination + ' (number)');
					analytics('send', 'event', 'rate', 'number', o[0].destination + ' (number)', 0);
				}
                
				$scope.$apply();
				
			}, elem.value);
			
		}
		
		$scope.supportrequest = function() {
			var name = document.getElementById("name").value;
			var email = document.getElementById("email").value;
			var phone = document.getElementById("phone").value;
			var text = document.getElementById("message").value;
			if(name.length < 3) {
				alert('Enter your name');
				return;
			}

			var atpos = email.indexOf("@");
			var dotpos = email.lastIndexOf(".");
			if (email.length < 7 || atpos < 1 || dotpos < atpos+2 || dotpos+ 2 >= email.length) {
				alert('Enter valid email address');
				return;
		    	}

			var phoneno = /^\+{0,2}([\-\. ])?(\(?\d{0,3}\))?([\-\. ])?\(?\d{0,3}\)?([\-\. ])?\d{3}([\-\. ])?\d{4}/; 
			//var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
			if($scope.selectedSupport.id == 2 && (phone.length < 9)) {
				alert('Enter valid phone number');
				return;
			}

			if(text.length < 20) {
				alert('Enter sufficient details for us to help you');
				return;
			}
			
			var subject = $scope.supportSelectionBoxList[$scope.selectedSupport.id].name;
			if($scope.selectedSupport.id == 2) {
				text = 'Phone: ' + phone + "\n\n" + text; 
			}
			//alert(text);

			tringme_support(0, 1, subject, text, 0, email);
			$scope.selectedSupport.id = 4;
		}
		

	$scope.countries = countries;
		
	$scope.selectedCountry16={name:'Russia'};$scope.inputChanged=function(str){$scope.console10=str;}
	$scope.focusState='None';$scope.focusIn=function(){var focusInputElem=document.getElementById('ex12_value');$scope.focusState='In';focusInputElem.classList.remove('small-input');}
	$scope.focusOut=function(){var focusInputElem=document.getElementById('ex12_value');$scope.focusState='Out';focusInputElem.classList.add('small-input');}
	$scope.clearInput=function(id){if(id){$scope.$broadcast('angucomplete-alt:clearInput',id);}else{$scope.$broadcast('angucomplete-alt:clearInput');}}
	$scope.changeInput=function(id){if(id){var pos=Math.floor(Math.random()*($scope.countries.length-1));$scope.$broadcast('angucomplete-alt:changeInput',id,$scope.countries[pos]);}}
	$scope.disableInput=true;$scope.requireExample8a=true;$scope.requireExample8b=true;
    
	// $scope.footerURL = function () {
			// if(window.innerWidth > 786)
				// return 'footer.html';
			// else
				// return 'footer_responsive.html';
				    
	// };
	// $scope.footerURLInner = function () {
		// if (window.innerWidth > 786)
			// return '../footer-in.html';
		// else
			// return '../footer_responsive-in.html';

	// }
}]);

app.controller('faqController',['$scope','$http','$rootScope', '$window', function ($scope,$http,$rootScope, $window) {
	tringme_init(true);
		$scope.loggedin = tringme_isloggedin();
		$scope.logintext = 'Sign in';
		if($scope.loggedin)
			$scope.logintext = 'My Account';
		$scope.showsignup = function () { return !($scope.loggedin)}; 
	$scope.faqcategories = [];
	$scope.faq = [];
	$scope.faq_id = 0;
	$scope.faq_title = '';
	$scope.faq[0] = [];


	$scope.get_faq = function(id) {
			
		for(i=0; i< $scope.faqcategories.length; i++) {
			if($scope.faqcategories[i].id == id) {
				$scope.faq_title = $scope.faqcategories[i]['name'];
				break;
			}
		}

		if($scope.faq[id] != undefined && $scope.faq[id].length > 0) {
			$scope.faq_id = id;
			$scope.$apply();
			return;
		}

		var tempdiv = null;
		function strip(html)
		{
		   if(null == tempdiv)
		   	tempdiv = document.createElement("DIV");

		   tempdiv.innerHTML = html;
		   return tempdiv.textContent || tempdiv.innerText || "";
		}

		tringme_support(function(r, o, e) {
			if(r) {
				$scope.faq[id] = o['support_faq'].faq.faq;
				console.log(o);
				console.log(o['support_faq']);
				console.log($scope.faq[id][0]);
				$scope.faq_id = id;
				for(i=0; i< $scope.faqcategories.length; i++) {
					if($scope.faqcategories[i].id == id) {
						$scope.faq_title = $scope.faqcategories[i]['name'];
						break;
					}
				}

				for(i=0; i< $scope.faq[id].length; i++) {
					$scope.faq[id][i].a = strip($scope.faq[id][i].a);
				}

				$scope.$apply();
				Init(true); //this is template function
			}
					
			},
			id, 0, '', '', 0, '', 'faq');
	}
	
	tringme_support(function(r, o, e) {
		if(r) {
			$scope.faqcategories = o['support_kb']['categories'];
			console.log($scope.faqcategories);
			console.log($scope.faqcategories[0]);
			$scope.$apply();
			$scope.get_faq($scope.faqcategories[0].id);
		}
				
		},
		0, 0, '', '', 0, '', 'faq');
}]);

app.controller('rateController',['$scope','$http','$rootScope', '$window', function ($scope,$http,$rootScope, $window) {
	tringme_init(true);
		$scope.loggedin = tringme_isloggedin();
		$scope.logintext = 'Sign in';
		if($scope.loggedin)
			$scope.logintext = 'My Account';
		$scope.showsignup = function () { return !($scope.loggedin)}; 

		$scope.rates = {};
		$scope.minrate = 1; //keep it minimum in case fetching rate fails
		$scope.restricted=false;
		tringme_getcountryrates(function(r, o, e) {
			if(r && o != undefined && o != null)
				$scope.rates = o;
				$scope.minrate = 1000;
				for(i=0; i< $scope.rates.length; i++) {
					if(parseFloat($scope.rates[i].rate) < parseFloat($scope.minrate)) {
						$scope.minrate = $scope.rates[i].rate;
						//console.log($scope.rates[i].rateflag);
						if(parseInt($scope.rates[i].rateflag)&16)
							$scope.restricted=true;
					}
				}
				$scope.$apply();
				console.log(o);
			},

		thiscountrycode, thiscountryname);
}]);

app.filter('range', function() {
  return function(input, total) {
	  total = parseInt(total);
		  for (var i=0; i<total; i++)
			input.push(i);
			return input;
			  };
			  });
