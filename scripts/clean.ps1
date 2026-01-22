Write-Host "Running project cleanup script..."
$paths = @("_site", ".cache", "dist")
foreach ($p in $paths) {
  if (Test-Path $p) {
    try {
      Remove-Item -LiteralPath $p -Recurse -Force -ErrorAction Stop
      Write-Host "Removed: $p"
    } catch {
      Write-Warning "Failed to remove $p"
    }
  }
}
Write-Host "Cleanup complete."
