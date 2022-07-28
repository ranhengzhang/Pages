<template>
    <div>
        <DefaultSlot/>
        <NamedSlot/>
        <ScopedSlot/>
    </div>
</template>

<script>
import DefaultSlot from "@/components/DefaultSlot";
import NamedSlot from "@/components/NamedSlot";
import ScopedSlot from "@/components/ScopedSlot";

export default {
    name: 'App',
    components: {ScopedSlot, NamedSlot, DefaultSlot}
}
</script>

<style>

</style>
