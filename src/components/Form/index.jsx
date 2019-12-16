import React, { useCallback } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Grid from '@material-ui/core/Grid'
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core'

import styles from './styles'

const FormComponent = ({
  classes,
  xs,
  md,
  lg,
  formFields,
  stateField,
  fieldValues,
  onChange,
  onSubmit
}) => {
  const fieldsFormer = useCallback((field) => {
    if (field.type === 'date' ) {
      return (
        <>
          <InputLabel>
            {field.label}
          </InputLabel>
          <Input type='date'
            onChange={(e) => onChange(e, field.id)}
            value={stateField[field.id] || fieldValues[field.id]} 
            />
        </>
      )
    }
    return (
      <>
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          value={stateField[field.id] || fieldValues[field.id]}
          id={field.label} label={field.label}
          onChange={(e) => onChange(e, field.id)}/>
      </>
    )
  }, [fieldValues, onChange, stateField])

  const formFieldGrid = ( fields ) => {
    const mdAdjusted= md || xs || 6
    const lgAdjusted = lg || md
    return fields.map( ( field, index ) => (
      <Grid className={classes.gridItems} key={ field.name } item xs={ xs } lg={ lgAdjusted } md={ mdAdjusted }>
        { fieldsFormer( field ) }
      </Grid>
    ) )
  }

  return (
    <div className={classes.rootDiv}>
      <form onSubmit={ onSubmit }>
        <Grid container spacing={ 24 }>
          { formFieldGrid( formFields ) }
        </Grid>
      </form>
    </div>
  )
}

export default withStyles(styles)(FormComponent)
