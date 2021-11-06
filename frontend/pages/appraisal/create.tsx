import type { NextPage } from 'next';
import HeaderFooterLayout from '../../app/components/layouts/HeaderFooterLayout';
import {
	Grid,
	Paper
} from '@mui/material';
import AppraisalForm from '../../app/components/elements/AppraisalForm/AppraisalForm';

const Create: NextPage = () => {
	return (
		<HeaderFooterLayout
			backgroundProps={{
				style: {
					backgroundImage: `url('../../img/bitmap.png'), linear-gradient(122deg, #317bda -6%, #33c3c8)`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat'
				}
			}}
		>
			<Grid container justifyContent='center' alignContent='center' sx={{ display: 'flex' }}>
				<Grid item xs={12} sm={10} md={8} lg={6} justifyContent='center'>
					<Paper sx={{ padding: '30px 20px' }}>
						<AppraisalForm />
					</Paper>
				</Grid>
			</Grid>
		</HeaderFooterLayout>
	);
}

export default Create
