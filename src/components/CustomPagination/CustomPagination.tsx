import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Pagination,
    Select,
    SelectChangeEvent,
    Typography
} from '@mui/material';
import React, { ChangeEvent, FunctionComponent, memo } from 'react';

interface Props {
    count: number;
    rowsPerPage: number;
    page: number;
    handleChangeRowsPerPageAction: ( event: SelectChangeEvent<number> ) => void
    handleChangePageAction: ( event: ChangeEvent<unknown>, value: number ) => void
}

// todo: Нужно поменять модель и возвращать всего количество элементов
const CustomPagination: FunctionComponent<Props> = ( {
                                                         count = 0,
                                                         page,
                                                         rowsPerPage,
                                                         handleChangeRowsPerPageAction,
                                                         handleChangePageAction
                                                     } ) => {

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={ {
                mt: 2
            } }
        >
            <Grid item>
                <Typography>Найдено: { count }</Typography>
            </Grid>
            <Grid item sx={ {
                display: 'flex',
                alignItems: 'center'
            } }>
                <FormControl variant={ 'standard' } sx={ {
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 2,
                    '& .Mui-focused:after': {
                        display: 'none',
                    },
                    '& .MuiFormLabel-root': {
                        position: 'static',
                        transform: 'none',
                        marginRight: 1,
                        color: 'inherit',
                        '&.Mui-focused': {
                            color: 'inherit',
                        }
                    },
                    '& .MuiInput-root': {
                        marginTop: 0,
                        '& .MuiInput-input:focus': {
                            backgroundColor: 'transparent'
                        },
                        '&:hover:before,&:before': {
                            borderBottom: 0
                        }
                    }
                } }>
                    <InputLabel id="rows_per_page_label">Строк на странице:</InputLabel>
                    <Select
                        labelId="rows_per_page_label"
                        id="rows_per_page"
                        value={ rowsPerPage }
                        onChange={ handleChangeRowsPerPageAction }
                    >
                        <MenuItem value={ 8 }>8</MenuItem>
                        <MenuItem value={ 16 }>16</MenuItem>
                        <MenuItem value={ 32 }>32</MenuItem>
                    </Select>
                </FormControl>
                <Pagination
                    count={ count ? Math.ceil( count / rowsPerPage ) : 1 }
                    color="primary"
                    page={ page }
                    boundaryCount={ 2 }
                    siblingCount={ 3 }
                    onChange={ handleChangePageAction }
                />
            </Grid>
        </Grid>
    );
};

export default memo( CustomPagination );
