export default {
    namespaced: true,
    actions: {
        increaseOdd(context, value) {
            if (context.state.sum & 1) {
                context.commit('INCREASE', value)
            }
        },
        increaseWait(context, value) {
            setTimeout(()=>{
                context.commit('INCREASE', value)
            }, 500)
        }
    },
    mutations: {
        INCREASE(state, value) {
            state.sum += value;
        },
        DECREASE(state, value) {
            state.sum -= value;
        },
    },
    state: {
        sum: 0,
        school: 'school name',
        subject: 'subject name',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        }
    }
}