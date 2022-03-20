class QuickAcessCard extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="quick_access_hero_wrapper component">
        <div class="quick_access">
            <h1>Quick Access</h1>
            <div class="links">
                <a href="">
                    Provider Information
                </a>
                <a href="">
                    Referrals & Authorizations
                </a>
                <a href="">
                    Claims
                </a>
                <a href="">
                    Member Eligibility
                </a>
            </div>
        </div>
    </div>
        `
    }
}

//Define Custom Element 
customElements.define('quick-access-links-card', QuickAcessCard);