<template>
    <label for="name">
        {{ label }}
        <span
            v-if="isRequired"
            class="text-danger"
        >
            *
        </span>
    </label>
    <input
        v-bind="$attrs"
        :placeholder="label"
        :value="modelValue"
        @input="onInput($event.target.value)"
        @blur="onBlur($event.target.value)"
        :name="label.toLowerCase()"
        :id="label.toLowerCase()"
    />
    <small
        v-for="error in errors"
        :key="error"
        class="text-danger"
    >
        {{ error }} <br />
    </small>
</template>

<script lang="ts">
    import type { PropType } from "vue";
    import type { Validator } from "@/typings/FormValidationTypes";
    import { ValidatorType } from "@/models/BaseValidators";
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "BaseInput",
        data: () => {
            return {
                errors: [] as string[]
            };
        },
        props: {
            label: {
                type: String,
                default: ""
            },
            modelValue: {
                type: [String, Number],
                required: true
            },
            validators: {
                type: Array as PropType<Array<Validator>>,
                default() {
                    return [] as Array<Validator>;
                }
            }
        },
        computed: {
            isRequired(): boolean {
                return this.validators.some(
                    (x) => x.type === ValidatorType.required
                );
            }
        },
        methods: {
            getValidationResult(value: string): boolean {
                let result = true;
                this.errors = [];

                for (const validator of this.validators) {
                    const validationResult = validator.validate(value);

                    result = result && validationResult.isValid;

                    if (!validationResult.isValid) {
                        this.errors.push(validationResult.errorMessage);
                    }
                }

                return result;
            },
            onInput(value: string): void {
                this.getValidationResult(value);
                this.$emit("update:modelValue", value);
            },
            onBlur(value: string): void {
                this.getValidationResult(value);
            }
        },
        emits: { "update:modelValue": null }
    });
</script>

<style scoped></style>
