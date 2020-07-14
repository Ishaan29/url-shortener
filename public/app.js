const app = new Vue({
    el: '#app',
    data: {
        url: '',
        slug: '',
        created: null,
    },
    methods: {
        async createUrl(){

            const responnse = await fetch('/url', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    url: this.url,
                    slug: this.slug
                })
            });
            this.created = await responnse.json();
        }
    }
})
