export const checkListData = {
  english: {
    title: "New Computer Setup Checklist",
    badgeValue: "Checklist",
    subtitle:
      "Please follow the instructions below to setup your new computer. click on",
    subtitle_link: "step 1",
    subtitle_e: "to begin the process",
    tableHeader:
      "Standard Support – Ensure these steps are completed successfully. These apply to all employees.",
    arr: [
      {
        id: "1",
        description: "Power on and log in to your new computer.",
        bullet_list: [
          "<b>At the office?</b> Log in using Wi-Fi as you normally would",
          {
            bu_list_p:
              "<b>At home?</b> Using your old computer, refer to the instructions ‘Logging in to your new computer’ located in",
            link_text: "located in Step 1",
            link: "/step1",
          },
          "Keep your new computer turned on and logged in for up to 2 days to ensure applications and data have time to synchronize",
        ],
      },
      {
        id: "2",
        description:
          "Microsoft Office (Outlook, Word, Excel, OneNote, PowerPoint)",
        bullet_list: [
          "<b>Launch each application</b> to ensure they are functioning as expected",
          "<b>Check any shared mailboxes</b> you previously had access to and try sending a test email ",
        ],
      },
      {
        id: "3",
        description: "Microsoft OneDrive",
        bullet_list: [
          "<b>Launch</b> the OneDrive application and confirm that your files are safely in the cloud",
          "<b>NOTE: Synchronization</b> of files from the cloud to your computer may take some time",
        ],
      },
      {
        id: "4",
        description: "Microsoft Teams",
        bullet_list: [
          "<b>Launch</b> Teams and have a quick test chat with a colleague",
        ],
      },
      {
        id: "5",
        description: "VPN Client",
        bullet_list: [
          "<b>Launch the VPN client</b> on your computer & login",
          "<b>Don’t see it?</b> Launch Software Centre and install it from the list",
        ],
      },
      {
        id: "6",
        description: "IMPORTANT – Return your old computer",
        bullet_list: [
          "Please review the additional support options below. If none apply, you are ready to return your old computer.",
          "Place your old computer (including power supply and mouse) into the box your new computer arrived in and seal it.",
          "Affix the included prepaid waybill to the box, complete the sender information and sign in the “Sender Signature” area.",
          "Schedule a pickup by calling <b>1-888-SHIP-123</b> or take the parcel to the nearest Purolator Drop-Off location.",
        ],
      },
    ],
    tableHeader_2:
      "Additional Support – Review and complete as needed before returning your old computer.",
    arr2: [
      {
        id: "1",
        description: "Other installed applications",
        bullet_list: [
          "<b>Check</b> to see if all expected applications are installed",
          "<b>If not, launch Software Centre<b/> on your new computer to self-install applications published there",
          "<b>Applications that you installed yourself</b> or via the Service Desk, will need to be manually installed again",
        ],
      },
      {
        id: "2",
        description: "Browser Favourites",
        bullet_list: [
          "<b>Open Microsoft Edge</b> on your old computer and turn on “sync options”",
          "Favourites will automatically sync to your new computer",
          "<b>Chrome and Firefox</b> will require you to manually backup your favourites",
        ],
      },
      {
        id: "3",
        description: "PST Files (Archived Email Messages)",
        bullet_list: [
          {
            bu_list_p:
              "If you have PST Files (archived email messages), they will need to be copied into your Outlook Online Archive folder. Instructions can be found on the",
            link_text: "Additional Applications Support page.",
            link: "/step6",
          },
        ],
      },
      {
        id: "4",
        description: "Printers",
        bullet_list: [
          {
            bu_list_p:
              "<b>Corporate printing</b> instructions can be found on the",
            link_text: "Additional Applications Support page.",
            link: "/step6",
          },
          "<b>Home printers</b> will need to be re-installed manually ",
        ],
      },
    ],
    footer: "You are all done! Enjoy your new computer!",
    footer_text:
      "If you encounter any issues completing this step, please contact our Computer Refresh team for support: ",
    footer_link_text: "Computer.Refresh@innovapost.com",
    footer_link_path: "Computer.Refresh@innovapost.com",
    btnInfo: [
      { to: "/", text: "Homepage" },
      { to: "/step1", text: "Step 1" },
    ],
  },

  french: {
    title: "Liste de vérification de la configuration d'un nouvel ordinateur",
    badgeValue: "Liste de contrôle",
    subtitle:
      "Veuillez suivre les directives ci-dessous pour configurer votre ordinateur. Cliquez sur",
    subtitle_link: "Étape 1",
    subtitle_e: "pour entamer le processus",
    tableHeader:
      "Soutien standard – Assurez-vous que ces étapes sont effectuées avec succès. Elles s’appliquent à tous les employés.",
    arr: [
      {
        id: "1",
        description: "Allumez votre ordinateur et ouvrez une session.",
        bullet_list: [
          "<b>Au bureau?</b>? Ouvrez une session à l’aide du Wi-Fi comme vous le feriez normalement.",
          {
            bu_list_p:
              "<b>À la maison? </b> À partir de votre ancien ordinateur, consultez les directives « Se connecter à votre nouvel ordinateur » ",
            link_text: "qui se trouvent dans l’Étape 1",
            link: "/step1",
          },
          "Gardez votre nouvel ordinateur allumé avec une session ouverte pendant jusqu’à deux jours afin de vous assurer que les applications et les données ont le temps de terminer la synchronisation.",
        ],
      },
      {
        id: "2",
        description:
          "Microsoft Office (Outlook, Word, Excel, OneNote, PowerPoint)",
        bullet_list: [
          "<b>Lancez chaque application</b> pour vous assurer qu’elle fonctionne comme prévu.",
          "<b>Vérifiez les boîtes aux lettres partagées</b> auxquelles vous aviez accès et tentez d’envoyer un courriel d’essai.",
        ],
      },
      {
        id: "3",
        description: "Microsoft OneDrive",
        bullet_list: [
          "<b>Lancez</b> l’application OneDrive et confirmez que vos fichiers se trouvent en toute sécurité dans le nuage.",
          "<b>REMARQUE : La synchronisation</b> des fichiers du nuage vers votre ordinateur peut prendre un certain temps.",
        ],
      },
      {
        id: "4",
        description: "Microsoft Teams",
        bullet_list: [
          "<b>Lancez</b> Teams et faites un test rapide de clavardage avec un collègue.",
        ],
      },
      {
        id: "5",
        description: "Réseau privé virtuel (RPV)",
        bullet_list: [
          "<b>Trouvez le client RPV</b> sur notre ordinateur et ouvrez une session.",
          "<b>Vous ne le voyez pas?</b> Lancez le Centre logiciel et installez-le à partir de la liste.",
        ],
      },
      {
        id: "6",
        description: "REMARQUE IMPORTANTE – Retournez votre ancien ordinateur",
        bullet_list: [
          "Veuillez passer en revue les options de soutien supplémentaire ci-dessous. Si aucune d’entre elles ne s’applique, vous pouvez retourner votre ancien ordinateur.",
          "Placez votre ancien ordinateur (y compris le bloc d’alimentation et la souris) dans la boîte dans laquelle votre nouvel ordinateur est arrivé et scellez-la.",
          "Apposez le bordereau de retour prépayé sur la boîte, remplissez la section de l’expéditeur et signer le bordereau dans la section « Signature de l’expéditeur ».",
          "Planifiez un ramassage en composant <b>1 888 SHIP-123</b> ou apportez le colis au point de dépôt Purolator le plus près.",
        ],
      },
    ],
    tableHeader_2:
      "Soutien supplémentaire – Passez en revue et suivez les étapes ci-dessous au besoin avant de retourner votre ancien ordinateur.",
    arr2: [
      {
        id: "1",
        description: "Autres applications installées",
        bullet_list: [
          "<b>Vérifiez</b> si toutes les applications prévues sont installées.",
          "<b>Si ce n’est pas le cas, lancez le Centre logiciel<b/> sur votre nouvel ordinateur pour y installer les applications qui y sont publiées.",
          "<b>Les applications que vous avez installées vous-même</b> ou par l’entremise du service d’assistance devront être installées de nouveau manuellement.",
        ],
      },
      {
        id: "2",
        description: "Favoris du navigateur",
        bullet_list: [
          "<b>Ouvrez Microsoft Edge</b> sur votre ancien ordinateur et activez les options de synchronisation.",
          "Les favoris seront automatiquement synchronisés avec votre nouvel ordinateur.",
          "<b>Chrome et Firefox</b> vous demanderont de sauvegarder manuellement vos favoris.",
        ],
      },
      {
        id: "3",
        description: "Fichiers PST (courriels archivés)",
        bullet_list: [
          {
            bu_list_p:
              "Si vous avez des fichiers PST (courriels archivés), vous devrez les copier dans votre dossier Outlook - Archive en ligne. Instructions disponibles dans la section",
            link_text: "Prise en charge d’applications supplémentaires.",
            link: "/step6",
          },
        ],
      },
      {
        id: "4",
        description: "Imprimantes",
        bullet_list: [
          {
            bu_list_p:
              "<b>Les directives d’impression de la Société </b> se trouvent dans la section",
            link_text: "Prise en charge d’applications supplémentaires",
            link: "/step6",
          },
          "<b>Les imprimantes à domicile</b> devront être réinstallées manuellement.",
        ],
      },
    ],
    footer: "Vous avez terminé! Profitez bien de votre nouvel ordinateur!",
    footer_text:
      "Si vous éprouvez des difficultés avec cette étape, écrivez à l’adresse",
    footer_link_text: "Computer.Refresh@innovapost.com",
    footer_link_path: "Computer.Refresh@innovapost.com",
    footer_link_text_e: "pour obtenir de l’aide.",
    btnInfo: [
      { to: "/", text: "Page d'accueil" },
      { to: "/step1", text: "Étape 1" },
    ],
  },
};
