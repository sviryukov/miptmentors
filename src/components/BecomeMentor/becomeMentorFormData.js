import {LongTextField} from "../common/forms/LongTextField";
import {ShortTextField} from "../common/forms/ShortTextField";
import {PhoneInput} from "../common/forms/PhoneInput";
import {PublicationConsent} from "../common/forms/PublicationConsent";
import {ProcessingConsent} from "../common/forms/ProcessingConsent";

const becomeMentorFormData = [
    {
        name: 'name',
        type: 'string',
        check: value => value !== '',
        Component: ShortTextField,
        props: {
            label: 'Имя',
            required: true
        }
    },
    {
        name: 'surname',
        type: 'string',
        check: value => value !== '',
        Component: ShortTextField,
        props: {
            label: 'Фамилия',
            required: true
        }
    },
    {
        name: 'education',
        type: 'string',
        check: value => value !== '',
        Component: LongTextField,
        props: {
            label: 'Образование',
            required: true
        }
    },
    {
        name: 'work',
        type: 'string',
        check: value => value !== '',
        Component: LongTextField,
        props: {
            label: 'Место работы и должность',
            required: true
        }
    },
    {
        name: 'phone',
        type: 'string',
        check: value => /^\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value),
        Component: PhoneInput,
        props: {
            required: true
        }
    },
    {
        name: 'email',
        type: 'string',
        check: value => /^.+@.+$/.test(value),
        Component: ShortTextField,
        props: {
            label: 'E-mail',
            required: true
        }
    },
    {
        name: 'publicationConsent',
        type: 'boolean',
        check: () => true,
        initialValue: true,
        Component: PublicationConsent,
        props: {
            required: true
        }
    },
    {
        name: 'processingConsent',
        type: 'boolean',
        check: value => value,
        Component: ProcessingConsent,
        initialValue: false,
        props: {
            required: true
        }
    }
];

export {becomeMentorFormData};