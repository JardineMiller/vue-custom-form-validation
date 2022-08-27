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
                type: [String],
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
            isValid(value: string): boolean {
                return this.validators?.every((x) => x.validate(value).isValid);
            },
            populateErrors(value: string): void {
                this.errors = [];

                for (const validator of this.validators) {
                    const validationResult = validator.validate(value);

                    if (!validationResult.isValid) {
                        this.errors.push(validationResult.errorMessage);
                    }
                }
            },
            onInput(value: string): void {
                const isValid = this.isValid(value);
                this.populateErrors(value);
                this.$emit("updateIsValid", {
                    name: this.label,
                    value: isValid
                });
                this.$emit("update:modelValue", value);
            },
            onBlur(value: string): void {
                const isValid = this.isValid(value);
                this.populateErrors(value);
                this.$emit("updateIsValid", {
                    name: this.label,
                    value: isValid
                });
            }
        },
        emits: {
            "update:modelValue": null,
            updateIsValid: null
        },
        beforeMount() {
            const isValid = this.isValid(this.modelValue);
            this.$emit("updateIsValid", {
                name: this.label,
                value: isValid
            });
        }
    });
</script>

<style scoped></style>
