// JavaScript Document
function valider(theForm) 
  {  
  var matr = /^[0-9]+$/; 
  var name = /^[a-zA-Z]+$/;
  var pren = /^[a-zA-Z]+$/;
  var teleph = /^[0-9]+$/;
  var email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]{2,}[.][a-zA-Z]{2,3}$/; 
  var fonction = /^[a-zA-Z]+$/;
  var carte = /^[0-9]{8}$/;
  var droi = /^[0-9]+$/;
  var situation = /^[a-zA-Z]+$/;
  var num = /^[0-9]+$/;
  var date = /^[0-9]{2}[-][0-9]{2}[-][0-9]{4}$/;
  var datt = /^[0-9]{4}[-][0-9]{4}$/;
  var ann = /^[0-9]{4}$/; 
  
   var err ="";
   var obj = document.getElementById("cin")
   obj.style.backgroundColor="";
 
   obj.style.backgroundColor="";
   var obj = document.getElementById("nom")
   obj.style.backgroundColor="";
  var obj = document.getElementById("prenom")
   obj.style.backgroundColor="";
   var obj = document.getElementById("dnais")
   obj.style.backgroundColor="";
   var obj = document.getElementById("lnais")
   obj.style.backgroundColor="";
   var obj = document.getElementById("ville")
   obj.style.backgroundColor="";
   var obj = document.getElementById("gov")
   obj.style.backgroundColor="";
   var obj = document.getElementById("codp")
   obj.style.backgroundColor="";
   var obj = document.getElementById("sex")
   obj.style.backgroundColor="";
   var obj = document.getElementById("mail")
   obj.style.backgroundColor="";
   var obj = document.getElementById("tel")
   obj.style.backgroundColor="";
   var obj = document.getElementById("mastere")
   obj.style.backgroundColor="";
   var obj = document.getElementById("anbac")
   obj.style.backgroundColor="";
   var obj = document.getElementById("sessionb")
   obj.style.backgroundColor="";
   var obj = document.getElementById("sectionb")
   obj.style.backgroundColor="";
   var obj = document.getElementById("mentionb")
   obj.style.backgroundColor="";
   var obj = document.getElementById("paysbac")
   obj.style.backgroundColor="";
   var obj = document.getElementById("anlicence")
   obj.style.backgroundColor="";
   var obj = document.getElementById("specialitel")
   obj.style.backgroundColor="";
   var obj = document.getElementById("facultel")
   obj.style.backgroundColor="";
   var obj = document.getElementById("nredoublement")
   obj.style.backgroundColor="";
   var obj = document.getElementById("anun1")
   obj.style.backgroundColor="";
   var obj = document.getElementById("anun2")
   obj.style.backgroundColor="";
   var obj = document.getElementById("anun3")
   obj.style.backgroundColor="";
   var obj = document.getElementById("anun4")
   obj.style.backgroundColor="";
   var obj = document.getElementById("moy1")
   obj.style.backgroundColor="";
   var obj = document.getElementById("moy2")
   obj.style.backgroundColor="";
   var obj = document.getElementById("moy3")
   obj.style.backgroundColor="";
   var obj = document.getElementById("moy4")
   obj.style.backgroundColor="";
   var obj = document.getElementById("session1")
   obj.style.backgroundColor="";
   var obj = document.getElementById("session2")
   obj.style.backgroundColor="";
   var obj = document.getElementById("session3")
   obj.style.backgroundColor="";
   var obj = document.getElementById("session4")
   obj.style.backgroundColor="";
   ////////////////////////////////////////////////
   var obj = document.getElementById("droitconstitutionnel")
   obj.style.backgroundColor="";
   var obj = document.getElementById("activiteadministv")
   obj.style.backgroundColor="";
   var obj = document.getElementById("financespubliques")
   obj.style.backgroundColor="";
   var obj = document.getElementById("droitinternationalp")
   obj.style.backgroundColor="";
   ///////////////////////////////////////////////////// 
   var obj = document.getElementById("theoriegeneraledo")
   obj.style.backgroundColor="";
   var obj = document.getElementById("droitcommercia")
   obj.style.backgroundColor="";
   var obj = document.getElementById("droitpenal")
   obj.style.backgroundColor="";
   var obj = document.getElementById("droitinternationalpr")
   obj.style.backgroundColor="";
   ///////////////////////////////////////////////////////
   var obj = document.getElementById("a1")
   obj.style.backgroundColor="";
   var obj = document.getElementById("a2")
   obj.style.backgroundColor="";
   var obj = document.getElementById("a3")
   obj.style.backgroundColor="";
   var obj = document.getElementById("a4")
   obj.style.backgroundColor="";
 
			
		if((theForm.cin.value == 0) || (theForm.cin.value.length == 0))
		 {      var obj = document.getElementById("cin")
		        obj.style.backgroundColor="#FF33CC"
		        err = err +  "Veuillez entrer : N Carte Identite !" +"\r\n";
		 } 
		 
	 
	 
		 
		 if(theForm.mastere.value.length == 0)
		 {      var obj = document.getElementById("mastere")
		        obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Mastere !" +"\r\n";
		 } 
 
		 
		 
		 
		 if(theForm.nom.value.length == 0)
		 {       var obj = document.getElementById("nom")
		        obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Nom !" +"\r\n";
		   
		 } 
		 
		
		 
		 
		 if(theForm.prenom.value.length == 0)
		 {      var obj = document.getElementById("prenom")
		        obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Prénom !" +"\r\n";
		   
		 } 
		 
		 
		  
		
		 if(theForm.tel.value.length == 0)
		 {      var obj = document.getElementById("tel")
		        obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : tel !" +"\r\n";
		   
		 } 
		 
		 if(!(matr.exec(theForm.tel.value)!=null) )
		 {       var obj = document.getElementById("tel")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Tel !" +"\r\n";
		   
		 } 
		 
		 
		 
		  if(theForm.mail.value.length == 0)
		 {      var obj = document.getElementById("mail")
		        obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Mail !" +"\r\n";
		   
		 } 
		
		if(!(email.exec(theForm.mail.value)!=null) )
		 {      var obj = document.getElementById("mail")
		        obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Mail !" +"\r\n";
		   
		 } 
		 
		 
		  		 
		
		 if(theForm.ville.value.length == 0)
		 {      var obj = document.getElementById("ville")
		        obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : ville !" +"\r\n";
		   
		 } 
		
/////////////////////////////////////////////////////////////////////////////////////////////////////		 
		  if(theForm.anbac.value.length == 0)
		 {      var obj = document.getElementById("anbac")
		        obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Année de bac !" +"\r\n";
		   
		 } 
		
		if(!(ann.exec(theForm.anbac.value)!=null) )
		 {       var obj = document.getElementById("anbac")
		        obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Année de bac !" +"\r\n";
		   
		 } 
		 
		 if(theForm.anlicence.value.length == 0)
		 {       var obj = document.getElementById("anlicence")
		        obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Année de licence !" +"\r\n";
		   
		 } 
		 
		
		 
		 
		  if(theForm.nredoublement.value.length == 0)
		 { 
			     var obj = document.getElementById("nredoublement")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : nombre de redoublement !" +"\r\n";
		   
		 } 
		
		if(!(matr.exec(theForm.nredoublement.value)!=null))
		 {        var obj = document.getElementById("nredoublement")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : nombre de redoublement !" +"\r\n";
		   
		 } 
		 
		  if(theForm.anun1.value.length == 0)
		 { 
			     var obj = document.getElementById("anun1")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Année universitaire 1 !" +"\r\n";
		   
		 } 
		 
		 
		 
		 
		  if(theForm.anun2.value.length == 0)
		 {       var obj = document.getElementById("anun2")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Année universitaire 2 !" +"\r\n";
		   
		 } 
		 
		
		 
		 
		  if(theForm.anun3.value.length == 0)
		 {        var obj = document.getElementById("anun3")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Année universitaire 3 !" +"\r\n";
		   
		 } 
		 
		 
		 
		 if(theForm.moy1.value.length == 0)
		 {  
			    var obj = document.getElementById("moy1")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Moyenne 1 !" +"\r\n";
		   
	     }
	 
	 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


	     if(isNaN(theForm.moy1.value) || theForm.moy1.value<0 || theForm.moy1.value>20  )
		 {  
			     var obj = document.getElementById("moy1")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Moyenne 1 !" +"\r\n";
			
		   
	     } 
		 
		    
		 
		 if(theForm.moy2.value.length == 0)
		 {       var obj = document.getElementById("moy2")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Moyenne 2 !" +"\r\n";
		   
		 } 
		 
		 if(isNaN(theForm.moy2.value)|| theForm.moy2.value<0 || theForm.moy2.value>20 )
		 {        var obj = document.getElementById("moy2")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Moyenne 2 !" +"\r\n";
		   
		 }
		 if(theForm.moy3.value.length == 0)
		 {       var obj = document.getElementById("moy3")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Moyenne 3 !" +"\r\n";
		   
		 } 
		 
		 if(isNaN(theForm.moy3.value)|| theForm.moy3.value<0 || theForm.moy3.value>20 )
		 {      var obj = document.getElementById("moy3")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Moyenne 3 !" +"\r\n";
		   
		 }
		  if(isNaN(theForm.moy4.value)|| theForm.moy4.value<0 || theForm.moy4.value>20 )
		 {       var obj = document.getElementById("moy4")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Moyenne 4 !" +"\r\n";
		   
		 }
/////////////////////////////////////////////////////////////////////////////////////////////		 
		 if(theForm.dnais.value.length == 0)
		 {  
			     var obj = document.getElementById("dnais")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Date de naissance !" +"\r\n";
		   
		 } 
		 
		 if(!(date.exec(theForm.dnais.value)!=null))
		 { 
			     var obj = document.getElementById("dnais")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Date de naissance est incorrect !" +"\r\n";
		   
		 }
		 
		 
		 if(theForm.lnais.value.length == 0)
		 {  
			     var obj = document.getElementById("lnais")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Adresse !" +"\r\n";
			
		   
		 } 
		 
		 if(theForm.ville.value.length == 0)
		 {  
			
			     var obj = document.getElementById("ville")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Ville !" +"\r\n";
				 
		   
		 }
		  
		 if(theForm.specialitel.value.length == 0)
		 { 
			     var obj = document.getElementById("specialitel")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Spécialité !" +"\r\n";
		   
		 } 
		 
		 if(theForm.facultel.value.length == 0)
		 {  
			    var obj = document.getElementById("facultel")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : faculté !" +"\r\n";
			
		   
		 } 
		 
		 
		 if(theForm.gov.value.length == 0)
		 { 
			     var obj = document.getElementById("gov")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Gouvernorat !" +"\r\n";
		   
		 } 
		  
		  
		  if(theForm.sex.value.length == 0)
		 {  
			     var obj = document.getElementById("sex")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Sex !" +"\r\n";
		   
		 }
		  
		  if(theForm.sectionb.value.length == 0)
		 { 
			     var obj = document.getElementById("sectionb")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Section !" +"\r\n";
		   
		 } 
		  
		  if(theForm.mentionb.value.length == 0)
		 {  
			     var obj = document.getElementById("mentionb")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Mention !" +"\r\n";
		   
		 } 
		 
		  if(theForm.sessionb.value.length == 0)
		 { 
			     var obj = document.getElementById("sessionb")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Session !" +"\r\n";
		   
		 } 
		
/////////////////////////////////////
		 if(isNaN(theForm.droitconstitutionnel.value)|| theForm.droitconstitutionnel.value<0 || theForm.droitconstitutionnel.value>20 )
		 {  
		   
			     var obj = document.getElementById("droitconstitutionnel")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Droit constitutionnel !" +"\r\n";
		   
		 }
		 
		 if(isNaN(theForm.activiteadministv.value)|| theForm.activiteadministv.value<0 || theForm.activiteadministv.value>20 )
		 {  
			     var obj = document.getElementById("activiteadministv")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Droit administrativel !" +"\r\n";
		   
		 }
		  if(isNaN(theForm.financespubliques.value)|| theForm.financespubliques.value<0 || theForm.financespubliques.value>20 )
		 {  
			      var obj = document.getElementById("financespubliques")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Finances Publiques  !" +"\r\n";
		   
		 }
		  if(isNaN(theForm.droitinternationalp.value)|| theForm.droitinternationalp.value<0 || theForm.droitinternationalp.value>20 )
		 {  
			     var obj = document.getElementById("droitinternationalp")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Droit international Public  !" +"\r\n";
		   
		 }
////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		if(isNaN(theForm.theoriegeneraledo.value)|| theForm.theoriegeneraledo.value<0 || theForm.theoriegeneraledo.value>20 )
		 {  
			     var obj = document.getElementById("theoriegeneraledo")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Theorie generale des obligations  !" +"\r\n";
		 }
		 
		 if(isNaN(theForm.droitcommercia.value)|| theForm.droitcommercia.value<0 || theForm.droitcommercia.value>20 )
		 {   
			     var obj = document.getElementById("droitcommercia")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Droit commercial  !" +"\r\n"; 
		 }
		 
		 if(isNaN(theForm.droitpenal.value)|| theForm.droitpenal.value<0 || theForm.droitpenal.value>20 )
		 {
			     var obj = document.getElementById("droitpenal")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Droit Penal  !" +"\r\n"; 
		 }
		 
		 if(isNaN(theForm.droitinternationalpr.value)|| theForm.droitinternationalpr.value<0 || theForm.droitinternationalpr.value>20 )
		 {  
			     var obj = document.getElementById("droitinternationalpr")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Droit International Prive  !" +"\r\n"; 
		 }
///////////////////////////////////////////////
		
		if(isNaN(theForm.a1.value)|| theForm.a1.value<0 || theForm.a1.value>20 )
		 {   
			     var obj = document.getElementById("a1")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Anglais 1  !" +"\r\n";
		 }
		  
		  if(isNaN(theForm.a2.value)|| theForm.a2.value<0 || theForm.a2.value>20 )
		 {   
			     var obj = document.getElementById("a2")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Anglais 2  !" +"\r\n"; 
		 }
		  
		  if(isNaN(theForm.a3.value)|| theForm.a3.value<0 || theForm.a3.value>20 )
		 {   
			     var obj = document.getElementById("a3")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Anglais 3  !" +"\r\n";
		 }
		 
		 if(isNaN(theForm.a4.value)|| theForm.a4.value<0 || theForm.a4.value>20 )
		 {  
			     var obj = document.getElementById("a4")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Anglais 4  !" +"\r\n";  
		 }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////		 
		 if(theForm.session1.value.length == 0)
		 { 
			     var obj = document.getElementById("session1")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Session 1  !" +"\r\n";
		   
		 } 
		 if(theForm.session2.value.length == 0)
		 {  
		         var obj = document.getElementById("session2")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Session 2  !" +"\r\n";
		   
		 } 
		 if(theForm.session3.value.length == 0)
		 {  var obj = document.getElementById("session3")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Session 3  !" +"\r\n";
		 } 
		 
		 if(theForm.codp.value.length == 0)
		 {  
			     var obj = document.getElementById("codp")
		         obj.style.backgroundColor="#FF33CC"
		         err = err +  "Veuillez entrer : Code postal  !" +"\r\n";
		   
		 } 
		 
	  
	        if(err=="")
		    {
			return true;
	    	}
		    else
		    {
			alert(err);
			return false;
		    } 
		 
  }	 // JavaScript Document