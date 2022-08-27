<template>
    <form
        action=""
        method="post"
    >
        <div class="form-group my-4">
            <BaseInput
                v-model="model.name.value"
                :validators="model.name.validators"
                @update-is-valid="updateIsValid"
                label="Name"
                class="form-control"
                type="text"
            ></BaseInput>
        </div>

        <div class="form-group my-4">
            <BaseInput
                v-model="model.email.value"
                :validators="model.email.validators"
                @update-is-valid="updateIsValid"
                label="Email"
                class="form-control"
                type="text"
            ></BaseInput>
        </div>

        <div class="form-group my-4">
            <BaseInput
                v-model="model.password.value"
                :validators="model.password.validators"
                @update-is-valid="updateIsValid"
                label="Password"
                class="form-control"
                type="password"
            ></BaseInput>
        </div>

        <div class="form-group my-4">
            <BaseInput
                v-model="model.age.value"
                :validators="model.age.validators"
                @update-is-valid="updateIsValid"
                label="Age"
                class="form-control"
                type="number"
            ></BaseInput>
        </div>

        <button
            :disabled="!formIsValid"
            class="btn btn-success"
        >
            Submit
        </button>
    </form>

    <p>
        {{ JSON.stringify(model) }}
    </p>
</template>

<script lang="ts">
    import BaseInput from "@/components/forms/BaseInput.vue";
    import FormInput from "@/models/FormInput";
    import Validators from "@/models/BaseValidators";
    import { defineComponent } from "vue";

    export default defineComponent({
        components: { BaseInput },
        data: () => {
            return {
                categories: ["cat-1", "cat-2", "cat-3", "cat-4", "cat-5"],
                model: {
                    name: new FormInput("name", [
                        Validators.required(),
                        Validators.minLength(3)
                    ]),
                    email: new FormInput("email", [
                        Validators.required(),
                        Validators.email()
                    ]),
                    password: new FormInput("password", [
                        Validators.required(),
                        Validators.minLength(6),
                        Validators.maxLength(18)
                    ]),
                    age: new FormInput("age", [Validators.maxNumber(10)])
                } as {
                    name: FormInput;
                    email: FormInput;
                    password: FormInput;
                    age: FormInput;
                }
            };
        },
        computed: {
            formIsValid(): boolean {
                const inputs = Object.values(this.model) as Array<FormInput>;
                return inputs.every((x) => x.isValid);
            }
        },
        methods: {
            updateIsValid(emitted: { name: string; value: boolean }) {
                const inputs = Object.values(this.model) as Array<FormInput>;
                const input = inputs.find(
                    (x) => x.propertyName == emitted.name.toLocaleLowerCase()
                );

                if (input) {
                    input.isValid = emitted.value;
                }
            }
        }
    });
</script>

<style></style>
