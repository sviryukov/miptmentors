import {LongTextField} from "../common/forms/LongTextField";
import {Textarea} from "../common/forms/Textarea";

const contactUsFormData = [
    {
        name: 'email',
        type: 'string',
        check: value => /^.+@.+$/.test(value),
        Component: LongTextField,
        props: {
            label: 'E-mail',
            required: true,
            variant: 'outlined'
        }
    },
    {
        name: 'question',
        type: 'string',
        check: value => value !== '',
        Component: Textarea,
        props: {
            label: 'Ваш вопрос',
            required: true,
            variant: 'outlined',
            rows: 5
        }
    }
];

export {contactUsFormData};