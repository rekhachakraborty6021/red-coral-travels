# Create placeholder images for states
$states = @('assam', 'arunachal', 'meghalaya', 'nagaland', 'manipur', 'mizoram', 'tripura', 'sikkim')
foreach ($state in $states) {
    Copy-Item 'public\images\themes\wildlife.jpg' "public\images\states\$state.jpg"
}

# Create placeholder images for tours
$tours = @('kaziranga', 'tawang', 'dzukou', 'root-bridge', 'hornbill', 'kamakhya', 'majuli', 'ziro', 'loktak', 'nohkalikai')
foreach ($tour in $tours) {
    Copy-Item 'public\images\themes\wildlife.jpg' "public\images\tours\$tour-main.jpg"
    Copy-Item 'public\images\themes\buddhist.jpg' "public\images\tours\$tour-1.jpg"
    Copy-Item 'public\images\themes\trekking.jpg' "public\images\tours\$tour-2.jpg"
    Copy-Item 'public\images\themes\tribal.jpg' "public\images\tours\$tour-3.jpg"
}

Write-Host "Placeholder images created successfully!"
