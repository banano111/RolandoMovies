import { defineStore } from "pinia";

export const userStore = defineStore("user", {
    state: () => {
        return {
            name: String,
            last_name: String,
            email: String,
            user_id: Number,
            is_auth: false
        }
    },
    
    actions: {
        setLoginValues(userValues){
            this.name = userValues.name
            this.last_name = userValues.last_name
            this.email = userValues.email
            this.user_id = userValues.user_id
            this.is_auth = userValues.is_auth
        },
    },
});
