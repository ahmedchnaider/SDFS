function not_nul(num_elt) {
	var no_nul=1;
	if (document.formulaire.elements[num_elt].type != "select-one") {
		if (document.formulaire.elements[num_elt].value=="") {
   		   no_nul=0;
   		}
	} else {
		if (document.formulaire.elements[num_elt].options[document.formulaire.elements[num_elt].options.selectedIndex].value=="") {
   		   no_nul=0;
   		}
	}
return no_nul;
}

function valid_date(year, month, day) {
	var valid;
	var months='121010110101';
	if (month!=2) {
   valid=(day<=(30+parseInt(months.charAt(month-1))));
	} else {
	  if (!year%100) {
  	 valid=(day<=(28+((year%400)==0)));
  } else {
  	 valid=(day<=(28+((year%4)==0)));
	  }
	}
return valid;
}

function is_numerics (num_elt) {
	var nums_str="0123456789";
	var numerics=1;
	var i=0;
	var str=document.formulaire.elements[num_elt].value;
	var str_length=str.length;
	while ((i<str_length)&&(nums_str.indexOf(str.charAt(i))!=-1)) {
		i++;
	}
	if (i<str_length) {numerics=0;}
	return numerics
}

function is_currency (num_elt) {
	var nums_str="0123456789.";
	var numerics=1;
	var i=0;
	var str=document.formulaire.elements[num_elt].value;
	var str_length=str.length;
	while ((i<str_length)&&(nums_str.indexOf(str.charAt(i))!=-1)) {
		i++;
	}
	if (i<str_length) {numerics=0;}
	return numerics
}


function is_alphabetics (alpha_elt) {
	var alpha_str="abcdefghijklmnopqrstuvwxyzéèêâç ";
	var alphabetics=1;
	var i=0;
	var str=document.formulaire.elements[alpha_elt].value;
	var str_length=str.length;
	while ((i<str_length)&&(alpha_str.indexOf(str.charAt(i).toLowerCase())!=-1)) {
		i++;
	}
	if (i<str_length) {alphabetics=0;}
	return alphabetics
}

function is_alphanumerics (alphanumerics_elt) {
	var alphanumerics_str="0123456789abcdefghijklmnopqrstuvwxyzéèêâç_-., ";
	var alphanumerics=1;
	var i=0;
	var str=document.formulaire.elements[alphanumerics_elt].value;
	var str_length=str.length;
	while ((i<str_length)&&(alphanumerics_str.indexOf(str.charAt(i).toLowerCase())!=-1)) {
		i++;
	}
	if (i<str_length) {alphanumerics=0;}
	return alphanumerics
}

function clean_spaces (str_in) {
	var str_out="";
	var str_length;
	str_in2 = new String(str_in);
	str_length=str_in2.length;
	var i=0;
	for (i=0;i<str_length-1;i++) {
		if (str_in2.substr(i,2)!="  ") {
			str_out+=str_in2.charAt(i);
		}
	}
	if (str_in2.charAt(str_length-1)!=' ') {
		str_out+=str_in2.charAt(str_length-1);
	}
	if (str_in2.charAt(0)==' ') {
		str_out=str_out.substr(1,str_length-2);
	}
	return str_out;
}

function clean_fields (tab_elt) {
	var i=0;
	for (i=0;i<tab_elt.length;i++) {
		document.formulaire.elements[tab_elt[i]].value=clean_spaces(document.formulaire.elements[tab_elt[i]].value);
	}
}

champs1=new Array('','','nom de jeune fille','sexe','jour de naissance','mois de naissance','année de naissance','lieu de naissance','gouvernorat de naissance','pays de naissance','nationalité','N° passeport','N° CNSS','état civil','situation militaire','année bac','section','mention','session','pays d\'obtention','N° rue','ville','code postal','gouvernorat de résidence','pays de résidence','téléphone','profession','établissment de travail','e-mail');

function not_nul_fields (tab_elt) {
	var i=0;
	var alert_msg="";
	for (i=0;i<tab_elt.length;i++) {
		if (!not_nul(tab_elt[i])) {
			alert_msg+="  "+champs1[tab_elt[i]]+"  \n";
		}
	}
	return alert_msg;
}

function is_alphabetics_fields (tab_elt) {
	var i=0;
	var alert_msg="";
	for (i=0;i<tab_elt.length;i++) {
		if (!is_alphabetics(tab_elt[i])) {
			alert_msg+="  "+champs1[tab_elt[i]]+"  \n";
		}
	}
	return alert_msg;
}

function is_numerics_fields (tab_elt) {
	var i=0;
	var alert_msg="";
	for (i=0;i<tab_elt.length;i++) {
		if (!is_numerics(tab_elt[i])) {
			alert_msg+="  "+champs1[tab_elt[i]]+"  \n";
		}
	}
	return alert_msg;
}

function is_alphanumerics_fields (tab_elt) {
	var i=0;
	var alert_msg="";
	for (i=0;i<tab_elt.length;i++) {
		if (!is_alphanumerics(tab_elt[i])) {
			alert_msg+="  "+champs1[tab_elt[i]]+"  \n";
		}
	}
	return alert_msg;
}

//
function valid_year_fields(tab_elt) {
	var i=0;
	var alert_msg="";
	var the_year="";
	for (i=0;i<tab_elt.length;i++) {
		the_year=document.formulaire.elements[tab_elt[i]].value;
		if (!(is_numerics(tab_elt[i])&&(parseInt(the_year)>1900)&&(parseInt(the_year)<2050))) {
			alert_msg+="  "+champs1[tab_elt[i]]+"  \n";
		}
	}
	return alert_msg;
}

//
function valid_date_fields(elt_year, elt_month, elt_day) {
	var valid=1;
	var alert_msg="";
	var the_year=document.formulaire.elements[elt_year].value;
	if (!(is_numerics(elt_year)&&(parseInt(the_year)>1900)&&(parseInt(the_year)<2050)&&valid_date(the_year,document.formulaire.elements[elt_month].selectedIndex,document.formulaire.elements[elt_day].selectedIndex))) {valid=0;}
return valid;
}
