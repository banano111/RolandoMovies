import { defineStore } from "pinia";

export const seriesStore = defineStore("series", {
    state: () => {        
        return {
            series: Object,
            is_ready: Boolean,
            error: Boolean
        }
    },
    
    actions: {
        setSeries(seriesValues){
            this.series = seriesValues.series
            this.is_ready = seriesValues.is_ready
            this.error = seriesValues.error
        },

        getSeries(){
            return this.series
        }
    },
});
