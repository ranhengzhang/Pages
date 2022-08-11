import axios from "axios";
import {nanoid} from "nanoid";

export default {
    namespaced: true,
    actions: {
        addPersoMa(context, value) {
            if (value.name.indexOf('ma') === 0) {
                context.commit('ADD_PERSON', value);
            }
        },
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social')
                .then(
                    response=>{
                        console.log(response.data)
                        context.commit('ADD_PERSON', {id: nanoid(), name: response.data});
                    },
                    error=>{
                        console.log(error.message);
                    }
                )
        }

    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value);
        },
    },
    state: {
        personList: [
            {
                id:'001',
                name: '001-name'
            }
        ],
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name;
        }
    }
}