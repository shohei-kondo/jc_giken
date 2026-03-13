$webPath = 'G:\マイドライブ\$$業務委託\005_JC技研\web'
$imagesPath = Join-Path $webPath 'images'

New-Item -ItemType Directory -Path $imagesPath -Force | Out-Null

$images = @(
    '1773379434410.png',
    'PXL_20221210_042114568.jpg',
    'PXL_20221210_051923732.jpg',
    '1658548152940.jpg',
    '1658558519560.jpg',
    '1684109075915.jpg',
    '1684109075988.jpg'
)

foreach ($img in $images) {
    $src = Join-Path $webPath $img
    $dst = Join-Path $imagesPath $img
    if (Test-Path $src) {
        Move-Item -Path $src -Destination $dst -Force
        Write-Host "Moved: $img"
    } else {
        Write-Host "Not found: $img"
    }
}

Write-Host '--- images/ folder contents ---'
Get-ChildItem $imagesPath | Select-Object Name
