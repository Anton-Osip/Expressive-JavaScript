const mountains = [
		{
			name: 'Джомолунгма',
			width: '8848,86',
			place: 'Махалангур-Химал, Гималаи',
		},
		{
			name: 'Чогори',
			width: '8611',
			place: 'Балторо Музтаг, Каракорум',
		},
		{
			name: 'Канченджанга',
			width: '8586',
			place: 'Канченджанга, Гималаи',
		},
		{
			name: 'Лхоцзе',
			width: '8516',
			place: 'Махалангур-Химал, Гималаи',
		},
		{
			name: 'Макалу',
			width: '8485',
			place: 'Махалангур-Химал, Гималаи',
		},
		{
			name: 'Чо-Ойю',
			width: '8188',
			place: 'Махалангур-Химал, Гималаи',
		},
		{
			name: 'Дхаулагири',
			width: '8167',
			place: 'Дхаулагири, Гималаи',
		},
		{
			name: 'Манаслу',
			width: '8163',
			place: 'Манаслу, Гималаи',
		},
		{
			name: 'Нангапарбат',
			width: '8126',
			place: 'Нангапарбат, Гималаи',
		},
		{
			name: 'Аннапурна I',
			width: '8091',
			place: 'Аннапурна, Гималаи',
		},
	],
	table = document.querySelector('#mountains')

function buildTable(array) {
	array.forEach(mount => {
		const row = document.createElement('tr')
		row.innerHTML = `	
            <th>${mount.name}</th>
			<th style = 'text-align:right'>${mount.width}</th>
			<th>${mount.place}</th>`
		table.append(row)
	})
}

buildTable(mountains)
