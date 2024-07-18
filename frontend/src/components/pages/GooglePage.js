export default function GooglePage() {
    // Récupérer l'URL actuelle
    const currentUrl = window.location.href;

    // Extraire les paramètres de l'URL
    const urlParams = new URLSearchParams(currentUrl);

    // Récupérer la valeur du paramètre "access_token"
    const accessToken = urlParams.get('accessToken');

    // Vérifier si le paramètre "access_token" existe
    if (accessToken) {
        // Stocker la valeur dans le local storage
        localStorage.setItem('jwt', accessToken);
    }

    // Rediriger l'utilisateur vers la page d'accueil
    window.location.href = '/shop';

    return <div>Redirection…</div>;
}