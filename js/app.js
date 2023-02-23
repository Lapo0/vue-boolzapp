/// 
const contacts = [
    {
    name: 'Michele',
    avatar: './img/avatar_1.png',
    visible: true,
    messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
            }
        ],
    },
    {
    name: 'Fabio',
    avatar: './img/avatar_2.png',
    visible: true,
    messages: [
            {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
        ],
    },
    {
    name: 'Samuele',
    avatar: './img/avatar_3.png',
    visible: true,
    messages: [
            {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
            }
        ],
    },
    {
    name: 'Alessandro B.',
    avatar: './img/avatar_4.png',
    visible: true,
    messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
        ],
    },
    {
    name: 'Alessandro L.',
    avatar: './img/avatar_5.png',
    visible: true,
    messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received'
            }
        ],
    },
    {
    name: 'Claudia',
    avatar: './img/avatar_6.png',
    visible: true,
    messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novità?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'received'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            status: 'sent'
            }
        ],
    },
    {
    name: 'Federico',
    avatar: './img/avatar_7.png',
    visible: true,
    messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Martina che è il suo compleanno!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'received'
            }
        ],
    },
    {
    name: 'Davide',
    avatar: './img/avatar.png',
    visible: true,
    messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            status: 'received'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            status: 'received'
            }
        ],
    }
]

const { createApp } = Vue

createApp({
    data() {
        return {
        contacts: contacts,
        selectedContact: [],
        myInputMessage: '',
        myMessage: '',
        answer: '',
        }
    },
    methods: {
        currentContact(indexContact) {
            this.selectedContact = this.contacts[indexContact]
            this.newContactSelected = true
        },
        inputMessage() {
            // creazione del nuovo oggetto messaggio da pushare nell'array dell'utente selezionato
            this.myMessage = {
                date: '10/01/2020 15:30:55',
                message: this.myInputMessage,
                status: 'sent'
            }
            // aggiunta del messaggio scritto nell'input nella schermata
            this.selectedContact.messages.push(this.myMessage)
            // reset dell'input
            this.myInputMessage = ''

            this.newContactSelected = false

            // Intervallo di tempo prima che l'utente risponda
            setTimeout(() => {
                if (!this.newContactSelected) {  // controllare se è stato selezionato un nuovo contatto dopo l'invio del messaggio
                  this.answer = {
                    date: '10/01/2020 15:30:55',
                    message: 'Non ho ben capito sai, potresti ripetere?',
                    status: 'received',
                  }
                  this.selectedContact.messages.push(this.answer)
                }
              }, 3000)
        },

        
    },

}).mount('#app')