<script setup lang="tsx">
/** @jsxImportSource vue */
import { motion } from "motion-v";
import { ref } from "vue";

const activeDirection = ref<"x" | "y" | null>(null);

function Line(props: {
    direction: "x" | "y";
    activeDirection: "x" | "y" | null;
}) {
    return (
        <motion.div
            initial={false}
            animate={{
                opacity: props.activeDirection === props.direction ? 1 : 0.3,
            }}
            transition={{ duration: 0.1 }}
            style={{ rotate: props.direction === "y" ? 90 : 0 }}
            class="line"
        />
    );
}
</script>

<template>
    <div id="example">
        <Line direction="x" :activeDirection="activeDirection" />
        <Line direction="y" :activeDirection="activeDirection" />
        <motion.div
            drag
            dragDirectionLock
            @directionLock="(direction) => (activeDirection = direction)"
            @dragEnd="() => (activeDirection = null)"
            :dragConstraints="{ top: 0, right: 0, bottom: 0, left: 0 }"
            :dragTransition="{ bounceStiffness: 500, bounceDamping: 15 }"
            :dragElastic="0.2"
            :whileDrag="{ cursor: 'grabbing' }"
            class="box"
        />
    </div>
</template>

<style>
#example {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.box {
    width: 52px;
    height: 52px;
    border: 1px solid #f5f5f5;
    position: absolute;
    cursor: grab;
}

.line {
    width: 300px;
    height: 1px;
    border-top: 1px dashed #f5f5f5;
    position: absolute;
}
</style>
