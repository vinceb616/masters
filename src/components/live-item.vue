<template>
    <div class="w-full flex items-center">
        <div 
            class="w-[40px] text-center py-0.5 bg-white border-b border-slate-300">
            <span class="text-xs">
                {{ model.status?.position?.displayName }}
            </span>
        </div>
        <div class="flex-1 px-4 py-0.5 bg-white border-b border-l border-slate-300 whitespace-nowrap text-ellipsis overflow-hidden">
            <span>
                {{ model.athlete?.displayName }}
            </span>
        </div>
        <div class="w-[40px] text-center py-0.5 bg-white border-l border-b border-slate-300">
            <span class="text-xs" 
                :class="{ 'text-masters-500': model.status?.type?.name === 'STATUS_IN_PROGRESS' }"
            >
                <template v-if="model.status?.thru || model.status?.thru === 0">
                    {{ model.status?.thru }}
                </template>
                <template v-else>
                    -
                </template>
            </span>
        </div>
        <div 
            class="w-[40px] text-center py-0.5 bg-white border-l border-b border-slate-300"
        >
            <span class="text-xs" 
                :class="
                    { 'text-masters-300': negativeScore && model.status?.displayValue !== 'WD' && model.status?.displayValue !== 'CUT' },
                    { 'text-masters-500': positiveScore && model.status?.displayValue !== 'WD' && model.status?.displayValue !== 'CUT' }
                "
            >
                <template v-if="model.status?.displayValue === 'WD' || model.status?.displayValue === 'CUT'">
                    {{ model.status?.displayValue }}
                </template>
                <template v-else-if="model.linescores[model.linescores.length - 1]?.displayValue">
                    {{ model.linescores[model.linescores.length - 1]?.displayValue }}
                </template>
                <template v-else>
                    -
                </template>
            </span>
        </div>
        <div 
            class="w-[54px] py-0.5 flex justify-center items-center border-b text-masters-200"
            :class="
                { 'bg-masters-300 border-masters-300': model.statistics[0]?.value < 0 },
                { 'bg-masters-900 border-masters-900': model.statistics[0]?.value > -1 }
            "
        >
            <span>
                <template v-if="model.status?.displayValue === 'WD'">
                    {{ model.status?.displayValue }}
                </template>
                <template v-else>
                    {{ model.statistics[0]?.displayValue }}
                </template>
            </span>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    model: {
        type: Object,
        default: () => ({}),
    }
});

const negativeScore = computed(() => {
    const letter = props.model.linescores[props.model.linescores.length - 1]?.displayValue.charAt(0);

    if (props.model.linescores[props.model.linescores.length - 1]?.displayValue !== '-' && letter === '-') {
        return true;
    } else {
        return false;
    }
});

const positiveScore = computed(() => {
    const letter = props.model.linescores[props.model.linescores.length - 1]?.displayValue.charAt(0);

    if (letter === '+') {
        return true;
    } else {
        return false;
    }
});
</script>