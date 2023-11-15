// Page : contact.php
//mettez ici votre adresse mail
//de préférence une adresse avec le même domaine de là où, vous utilisez ce code, cela permet un envoie quasi certain jusqu'au destinataire
$votre_adresse_mail = 'gabin.rolllandbetrand@ynov.com';
// si le bouton "Envoyer" est cliqué
if(isset($_POST['envoyer'])){
  
  //on vérifie que le champ mail est correctement rempli
  if(empty($_POST['mail'])) {
    echo "<p>Le champ mail est vide.</p>";
  
  //on vérifie que l'adresse est correcte
  }elseif(!preg_match("#^[a-z0-9_-]+((\.[a-z0-9_-]+){1,})?@[a-z0-9_-]+((\.[a-z0-9_-]+){1,})?\.[a-z]{2,}$#i", $_POST['mail'])){
    
    echo "<p>L'adresse mail entrée est incorrecte.</p>";
  
  //on vérifie que le champ sujet est correctement rempli
  }elseif(empty($_POST['sujet'])){
    
    echo "<p>Le champ sujet est vide.</p>";
  
  //on vérifie que le champ message n'est pas vide
  }elseif(empty($_POST['message'])){
    
    echo "<p>Le champ message est vide.</p>";
  
  //tout est correctement renseigné, on envoi le mail
  }else{
    
    
    //mail de l'utilisateur
    $mail_de_lutilisateur = $_POST['mail']; 
    
    //on renseigne les entêtes de la fonction mail de PHP
    // Attention à ne pas mettre de caractère spéciaux à "nom de votre site" qui pourraient poser problème
    $entetes_du_mail = [];
    $entetes_du_mail[] = 'MIME-Version: 1.0';
    $entetes_du_mail[] = 'Content-type: text/html; charset=UTF-8';
    $entetes_du_mail[] = 'From: Nom de votre site <' . $mail_de_lutilisateur . '>';
    $entetes_du_mail[] = 'Reply-To: Nom de votre site <' . $mail_de_lutilisateur . '>';
    
    //ajoute des sauts de ligne entre chaque headers
    $entetes_du_mail = implode("\r\n", $entetes_du_mail);
    
    //base64_encode() est fait pour permettre aux informations binaires d'être manipulées par les systèmes qui ne gèrent pas correctement les 8 bits (=?UTF-8?B? est une norme afin de transmettre correctement les caractères de la chaine)
    $sujet = '=?UTF-8?B?' . base64_encode($_POST['sujet']) . '?=';
    
    //htmlentities() converti tous les accents en entités HTML, ENT_QUOTES Convertit en + les guillemets doubles et les guillemets simples, en entités HTML
    $message = htmlentities($_POST['message'], ENT_QUOTES, 'UTF-8');
    
    //ajoute des sauts de ligne HTML si l'utilisateur en a utilisé
    $message = nl2br($message);
    
    //en fin, on envoi le mail
    
    
    if(mail($votre_adresse_mail, $sujet, $message, $entetes_du_mail)){
      
      echo "<p>Le mail à été envoyé avec succès !</p>";
    
    }else{
      
      echo "<p>Une erreur est survenue, le mail n'a pas été envoyé.</p>";
    
    }
  }
}