import React, { Component } from 'react'
import {
  Button,
  Typography,
  TextField,
  AppBar,
  Select,
  MenuItem,
  FormControl,
  Slider,
  Checkbox,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core'

export class FormHealthDetails extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const { values, handleChange } = this.props

    return (
      <React.Fragment>
        <AppBar position='sticky'>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Nos conte sobre sua saúde!
          </Typography>
        </AppBar>
        <br />

        <FormLabel style={styles.labelText}> Como você avalia seu nível de saúde? </FormLabel>
        <br />

        <Slider
          style={styles.sliderStyle}
          marks={values.customMarks}
          valueLabelDisplay='auto'
          min={1}
          max={10}
          onChange={handleChange('healthLevel')}
          defaultValue={values.healthLevel}
        />
        <br />

        <FormControl component="fieldset" style={styles.questionContainer}>
          <FormLabel component="legend" style={styles.labelText}> Assinale qual(is) doenças você apresenta </FormLabel>
          <FormControlLabel control={<Checkbox />} label="Diabetes" />
          <FormControlLabel control={<Checkbox />} label="Alto Colesterol" />
          <FormControlLabel control={<Checkbox />} label="Hipertensão" />
          <FormControlLabel control={<Checkbox />} label="Doenças reumatológicas (ex: artrite reumatoide, lupus)" />
          <FormControlLabel control={<Checkbox />} label="Doenças pulmonares crônicas (ex: bronquite, asma, enfisema)" />
          <FormControlLabel control={<Checkbox />} label="Hipotireoidismo/hipertireoidismo" />
          <FormControlLabel control={<Checkbox />} label="Outra" />
          <FormControlLabel control={<Checkbox />} label="Nenhuma" />
        </FormControl>
        <br />

        <FormLabel Component="legend" style={styles.labelText}> Faz uso de alguma medicação de uso contínuo? </FormLabel>
        <br /> <br />
        <FormControl style={{ width: 100, marginBottom: 20 }}>
          <Select
            onChange={handleChange('medicine')}
            defaultValue={values.medicine}
          >
            <MenuItem value="medicinePositive"> Sim </MenuItem>
            <MenuItem value="medicineNegative"> Não </MenuItem>
          </Select>
        </FormControl>
        <br />

        {values.medicine === 'medicinePositive' && (
          <TextField style={styles.floatingText} label="Quais medicações?" variant="standard" />
        )}
        <br />

        <TextField style={styles.floatingText} label="Altura (cm) - Numbers Only" variant="standard" />
        <br />

        <TextField style={styles.floatingText} label="Peso (kg) - Numbers Only" variant="standard" />
        <br /> <br /> <br />

        <FormControl component="fieldset" style={styles.questionContainer}>
          <FormLabel component="legend" style={styles.labelText}> Em relação ao seu peso corporal: </FormLabel>
          <RadioGroup>
            <FormControlLabel value="Eu quero ganhar bastante peso" control={<Radio />} label="Eu quero ganhar bastante peso" />
            <FormControlLabel value="Eu quero ganhar um pouco de peso" control={<Radio />} label="Eu quero ganhar um pouco de peso" />
            <FormControlLabel value="Estou feliz com o meu peso" control={<Radio />} label="Estou feliz com o meu peso" />
            <FormControlLabel value="Eu quero perder um pouco de peso" control={<Radio />} label="Eu quero perder um pouco de peso" />
            <FormControlLabel value="Eu quero perder bastante peso" control={<Radio />} label="Eu quero perder bastante peso" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" style={styles.questionContainer}>
          <FormLabel component="legend" style={styles.labelText}> Assinale a alternativa que descreve melhor a sua situação: </FormLabel>
          <RadioGroup defaultValue="3">
            <FormControlLabel value="1" control={<Radio />} label="No momento eu não estou fazendo nada para perder peso e não tenho a intenção de fazer algo pelos próximos meses" />
            <FormControlLabel value="2" control={<Radio />} label="No momento eu não estou fazendo nada para perder peso, mas estou pensando a respeito" />
            <FormControlLabel value="3" control={<Radio />} label="No último ano eu não fiz nada para perder peso, mas estou planejando fazer algo nos próximos 30 dias" />
            <FormControlLabel value="4" control={<Radio />} label="Eu tenho feito um esforço para perder peso" />
            <FormControlLabel value="5" control={<Radio />} label="Eu tenho feito um esforço para manter meu peso" />
          </RadioGroup>
        </FormControl>
        <br />

        <FormControl component="fieldset" style={styles.questionContainer}>
          <FormLabel component="legend" style={styles.labelText}> Instrução de medida: de preferência, ao acordar antes de levantar ou, em outra ocasião, após 5 min em deitado, fazer 2 medidas </FormLabel>
          <TextField style={{ alignSelf: 'center' }} label="Frequência cardíaca de repouso" variant="standard" />
        </FormControl>
        <br />

        <FormControl component="fieldset" style={styles.questionContainer}>
          <FormLabel component="legend" style={styles.labelText}> Com relação ao cigarro: </FormLabel>
          <RadioGroup>
            <FormControlLabel value="1" control={<Radio />} label="Sou fumante" />
            <FormControlLabel value="2" control={<Radio />} label="Sou ex-fumante" />
            <FormControlLabel value="3" control={<Radio />} label="Nunca fui fumante" />
          </RadioGroup>
        </FormControl>
        <br />

        <FormControl component="fieldset" style={styles.questionContainer}>
          <FormLabel component="legend" style={styles.labelText}> Com relação a bebidas alcoólicas você: </FormLabel>
          <RadioGroup>
            <FormControlLabel value="1" control={<Radio />} label="Não bebe" />
            <FormControlLabel value="2" control={<Radio />} label="Bebe eventualmente" />
            <FormControlLabel value="3" control={<Radio />} label="Bebe mais que 10 copos/semana" />
          </RadioGroup>
        </FormControl>
        <br />

        <FormControl component="fieldset" style={styles.questionContainer}>
          <FormLabel component="legend" style={styles.labelText}> Em relação à qualidade de vida, quais das opções abaixo, você escolheria para melhorar? Escolha no máximo 3: </FormLabel>
          <FormControlLabel control={<Checkbox />} label="Sono" />
          <FormControlLabel control={<Checkbox />} label="Atividade Física" />
          <FormControlLabel control={<Checkbox />} label="Alimentação" />
          <FormControlLabel control={<Checkbox />} label="Saúde Mental" />
          <FormControlLabel control={<Checkbox />} label="Peso Corporal" />
          <FormControlLabel control={<Checkbox />} label="Tabagismo / Etilismo / Uso de drogas" />
          <FormControlLabel control={<Checkbox />} label="Nada para melhorar" />
        </FormControl>
        <br />

        <Button
          color="secondary"
          variant="contained"
          style={styles.buttonBack}
          onClick={this.back}
        > Voltar </Button>

        <Button
          color="primary"
          variant="contained"
          style={styles.buttonContinue}
          onClick={this.continue}
        > Continuar </Button>
      </React.Fragment >
    )
  }
}

const styles = {
  buttonContinue: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: "#21b6ae",
  },
  buttonBack: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: '#999999',
    color: '#FFFFFF'
  },
  sliderStyle: {
    width: 500,
    marginTop: 10,
    marginBottom: 50
  },
  boxForm: {
    width: 100,
    marginBottom: 20
  },
  group: {
    alignContent: 'center',
    marginLeft: -20
  },
  questionContainer: {
    flex: 1,
    border: '2px solid gray',
    borderRadius: 15,
    padding: 20,
    width: '50%',
    marginBottom: 50,
  },
  labelText: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  floatingText: {
    marginBottom: 50
  }
}

export default FormHealthDetails
