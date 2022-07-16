import { useState, useEffect } from 'react';

export const useForm = ( initialForm = {}, formValidations={} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({})

    useEffect(() => {
      createValidators();
    
    }, [ formState ])
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {

        const formCheckedValues = {};

        for (const formField of Object.keys( formValidations)) {

            console.log('formField', formField )

           const [ fn, errorMessage ] = formValidations[formField];
           console.log( 'formations[formField]', formValidations[formField])

           formCheckedValues[`${ formField }Valid`] = fn( formState[ formField ] ) ? null : errorMessage;
           console.log('result', formCheckedValues )
        }
        
        setFormValidation( formCheckedValues )
        console.log( 'formCheckedValues', formCheckedValues)

    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
    }
}