// js/app.js
const pages = {
    dashboard: `
      <h2 class="text-xl font-semibold mb-4">Dashboard</h2>
      <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">+ Quick Create Job</button>
      <ul class="space-y-2">
        <li>Jobs In Progress: 2</li>
        <li>Completed Jobs: 5</li>
        <li>Pending Jobs: 1</li>
        <li>Low Stock Items: 3</li>
        <li>Customer Dues: ₹1200</li>
        <li>Vendor Dues: ₹800</li>
      </ul>
    `,
    customers: `
      <h2 class="text-xl font-semibold mb-4">Customers</h2>
      <button class="bg-green-500 text-white px-4 py-2 rounded mb-4">+ Add Customer</button>
      <p>Search and manage customers here.</p>
    `,
    jobs: `
      <h2 class="text-xl font-semibold mb-4">Jobs</h2>
      <button class="bg-yellow-500 text-white px-4 py-2 rounded mb-4">+ Create Job</button>
      <p>View job cards by status.</p>
    `,
    inventory: `
      <h2 class="text-xl font-semibold mb-4">Inventory</h2>
      <button class="bg-purple-500 text-white px-4 py-2 rounded mb-4">+ Add Item</button>
      <p>Track stock and vendor details.</p>
    `,
    reports: `
      <h2 class="text-xl font-semibold mb-4">Reports</h2>
      <p>View job reports and pending payments.</p>
    `,
    employees: `
      <h2 class="text-xl font-semibold mb-4">Employees</h2>
      <p>Track attendance, job assignments, and performance.</p>
    `
  };
  
  function navigate(page) {
    const content = document.getElementById('page-content');
    content.innerHTML = pages[page];
  }
  
  // Load default view
  navigate('dashboard');
  
