import React from 'react'
// import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
     <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
		<div className="container-fluid">
			<a href="/" className="navbar-brand">logo</a>
			<button className="navbar-toggler" type="button" 
			 data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
				<span className="navbar-toggler-icon"></span>
			</button><nav className="navbar navbar-expand-sm bg-dark navbar-dark">
		<div className="container-fluid">
			<a href="/" className="navbar-brand">logo</a>
			<button className="navbar-toggler" type="button" 
			 data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="collapsibleNavbar">
				<ul className="navbar-nav">
					<li className="nav-item"><a href="/" className="nav-link">Home</a></li>	
					<li className="nav-item"><a href="/About" className="nav-link">About</a></li>
					<li className="nav-item"><a href="/Contact" className="nav-link">Contact</a></li>
					<li className="nav-item"><a href="/regi" className="nav-link">Log-in</a></li>
					<li className="nav-item"><a href="/ac" className="nav-link">Create acount</a></li>
					




					<div class="nav-item dropdown">
						<a href="/" className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown">Company</a>

						<div className="dropdown-menu bg-primary m-0">
							<a href="/" className="dropdown-item bg-primary text-white">Add</a>
							<a href="/" className="dropdown-item bg-primary text-white">View</a>
						</div>
					</div>
				</ul>
			</div>
		</div>
	</nav>

			<div className="collapse navbar-collapse" id="collapsibleNavbar">
				<ul className="navbar-nav">
					<li className="nav-item"><a href="/" class="nav-link">Link</a></li>	
					<li className="nav-item"><a href="/" class="nav-link">Link</a></li>


					<div className="nav-item dropdown">
						<a href="/" className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown">Company</a>

						<div className="dropdown-menu bg-primary m-0">
							<a href="/" className="dropdown-item bg-primary text-white">Add</a>
							<a href="/" className="dropdown-item bg-primary text-white">View</a>
						</div>
					</div>
				</ul>
			</div>
		</div>
	</nav>
    </div>
  )
}

export default Navbar