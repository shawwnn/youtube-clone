import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper, IconButton, Icon } from "@mui/material"
import { Search } from "@mui/icons-material"

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState('');

  return (
    <Paper
      component="form"
			onSubmit={() => {}}
			sx={{
				borderRadius: 6,
				border: '1px solid #E3E3E3',
				pl: 2,
				boxShadow: 'none',
				mr: { sm: 5}
			}}
    >
			<input 
				className="search-bar"
				placeholder="Search..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<IconButton
				type="submit" sx={{ p:'10px', color: 'red' }}
			>
				<Search />
			</IconButton>
    </Paper>
  )
}

export default SearchBar