<script setup>
import { motion } from "motion-v";
</script>

<template>
    <div class="container">
        <motion.div drag class="box" />
    </div>
</template>

<style>
.container {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
}

.box {
    width: 100px;
    height: 100px;
    background-color: #8df0cc;
    border-radius: 10px;
}
</style>
