/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react'
import { makeStyles, Theme, Paper } from '@material-ui/core'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { ApolloProvider } from '@apollo/react-common'

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
	link: new HttpLink({ uri: 'http://localhost:9002/graphql' }),
	cache: new InMemoryCache(),
})

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(4),
	},
}))

const ProjectPageID: FC = ({ children }) => {
	const classes = useStyles()

	const TABS = gql`
		query Tabs {
			allCompanies {
				name
				industry
				employees {
					firstName
					lastName
					address
				}
			}
		}
	`

	const Company = (): any => {
		const { data, error, loading } = useQuery(TABS)
		if (loading) {
			return <div>Loading...</div>
		}
		if (error) {
			return <div>Error! {error.message}</div>
		}

		return (
			<div>
				{data &&
					data.allCompanies.map((company: any, index: number) => (
						<div key={index}>
							{index === 0 ? (
								<div>
									<h1>{company.name}</h1>
									<h2>{company.industry}</h2>
									<h3>Employees</h3>
									{company.employees.map(
										(
											employee: any,
											indexEmployee: number
										) => (
											<div key={indexEmployee}>
												<table>
													<tbody>
														<tr>
															<td>
																{' '}
																{
																	employee.firstName
																}{' '}
																{' | '}{' '}
															</td>
															<td>
																{' | '}{' '}
																{
																	employee.lastName
																}
																{' | '}{' '}
															</td>
															<td>
																{' | '}{' '}
																{
																	employee.address
																}{' '}
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										)
									)}
								</div>
							) : (
								''
							)}
						</div>
					))}
			</div>
		)
	}

	return (
		<div className={classes.root}>
			<Paper className={classes.root}>
				<ApolloProvider client={client}>
					<Company />
				</ApolloProvider>
			</Paper>
			{children}
		</div>
	)
}

export default ProjectPageID
