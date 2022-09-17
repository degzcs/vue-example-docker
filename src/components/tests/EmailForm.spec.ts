import { mount } from "@vue/test-utils";
import EmailForm from "src/components/EmailForm.vue";
import { describe, it, expect } from "vitest";

describe("EmailForm.vuew", () => {
    it("checks the form was rendered", () => {
        const wrapper = mount(EmailForm)
        expect(wrapper.find('p#error').text()).toEqual('error:')
        expect(wrapper.find('h3').text()).toEqual('Email form')
        expect(wrapper.find('input[type="email"]').exists()).toBeTruthy()
        expect(wrapper.find('input[type="submit"]').exists()).toBeTruthy()
    })

    it("should enter a valid email", async() =>{
        const wrapper = mount(EmailForm)
        await wrapper.find('input[type="email"]').setValue('valid@email.com')
        await wrapper.find('input[type="submit"').trigger('submit')
        expect(wrapper.find('p#error').text()).toEqual('error:')
    })
    it("shows an invalid message error", async() =>{
        const wrapper = mount(EmailForm)
        await wrapper.find('input[type="email"]').setValue('valid_email')
        await wrapper.find('input[type="submit"').trigger('submit')
        expect(wrapper.find('p#error').text()).toEqual('error: Please enter a valid email')
    })
    it("shows an error becuase the email is blank", async() =>{
        const wrapper = mount(EmailForm)
        await wrapper.find('input[type="email"]').setValue('')
        await wrapper.find('input[type="submit"').trigger('submit')
        expect(wrapper.find('p#error').text()).toEqual('error: Please enter an email!')
    })
})
