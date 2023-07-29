// Importez Axios si vous utilisez un système de modules comme CommonJS ou ES modules
import axios from 'axios';

const makeTransfer = () => {
    const montant = 100; // Montant du transfert
    const numeroCompteSource = 'OM1234567890'; // Numéro de compte source
    const numeroCompteDest = 'OM9876543210'; // Numéro de compte destination

    axios.post('/api/transfert/compte-a-compte', {
        montant,
        numero_compte_source: numeroCompteSource,
        numero_compte_dest: numeroCompteDest,
    })
    .then(response => {
        console.log(response.data.message); // Afficher le message de succès
    })
    .catch(error => {
        console.error(error.response.data.message); // Afficher le message d'erreur
    });
};

// Appelez la fonction pour effectuer le transfert
makeTransfer();
