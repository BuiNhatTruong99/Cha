import { Box, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const GenderRadio = () => {
    return (
        <Box>
            <FormControl>
                <RadioGroup row defaultValue="female">
                    <FormControlLabel
                        sx={{ color: '#4c78dd' }}
                        value="female"
                        control={<Radio sx={{ color: '#4c78dd' }} />}
                        label="Female"
                    />
                    <FormControlLabel
                        sx={{ color: '#4c78dd' }}
                        value="male"
                        control={<Radio sx={{ color: '#4c78dd' }} />}
                        label="Male"
                    />
                </RadioGroup>
            </FormControl>
        </Box>
    );
};
export default GenderRadio;
