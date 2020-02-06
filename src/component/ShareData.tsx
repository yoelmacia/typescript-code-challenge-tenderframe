/* eslint-disable indent */
/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { ApolloProvider } from '@apollo/react-common'

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import StatusButton from './StatusButton'

const client = new ApolloClient({
	link: new HttpLink({ uri: 'http://localhost:9002/graphql' }),
	cache: new InMemoryCache(),
})

export interface Props {
	titleStatus?: boolean
	status?: boolean
	buttons?: boolean
	name?: boolean
	industry?: boolean
	titleEmployees?: boolean
	employees?: boolean
}

const ShareData: FC<Props> = ({
	titleStatus,
	status,
	buttons,
	name,
	industry,
	titleEmployees,
	employees,
}) => {
	const STATUS = gql`
		query Tabs {
			allCompanies {
				status
			}
		}
	`

	const COMPANY = gql`
		query Tabs {
			allCompanies {
				name
				status
				industry
				employees {
					firstName
					lastName
					address
				}
			}
		}
	`

	const Status = (): any => {
		const { data, error, loading, refetch } = useQuery(STATUS)

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
									{titleStatus === true ? (
										<h3>Status</h3>
									) : (
										''
									)}
									{status === true ? (
										<h4>{company.status}</h4>
									) : (
										''
									)}
									{buttons === true ? (
										<div>
											<StatusButton
												text="+"
												disabled={false}
												onClick={() => refetch()}
											/>
											<StatusButton
												text="-"
												disabled={false}
												onClick={() => refetch()}
											/>
										</div>
									) : (
										''
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

	const Company = (): any => {
		const { data, error, loading } = useQuery(COMPANY)

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
									{name === true ? (
										<h1>{company.name}</h1>
									) : (
										''
									)}
									{industry === true ? (
										<h2>{company.industry}</h2>
									) : (
										''
									)}
									{titleEmployees === true ? (
										<h3>Employees</h3>
									) : (
										''
									)}
									{employees === true
										? company.employees.map(
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
										  )
										: ''}
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
		<div>
			<ApolloProvider client={client}>
				<Company />
				<Status />
			</ApolloProvider>
		</div>
	)
}

export default ShareData
