import {onBeforeUnmount, onMounted, reactive} from "vue";

export default function () {
    let point = reactive({
        x: 0,
        y: 0,
    });

    function updatePoint(event) {
        point.x = event.pageX;
        point.y = event.pageY;
        console.log(event.pageX, event.pageY);
    }

    onMounted(()=>{
        window.addEventListener('click', updatePoint);
    });

    onBeforeUnmount(()=>{
        window.removeEventListener('click', updatePoint);
    });

    return point;
}