
## Usage by maintainers
```yml
name: Reward First-Time Contributors

on:
    push:
        branches:
            - main

jobs:
    reward_contributor:
    steps:
        - name: Checkout code
          uses: actions/checkout@v2

        - name: Reward first-time contributor
          uses: your-username/reward-action@v1
          with:
            github_token: ${{ secrets.GITHUB_TOKEN }}
            solana_wallet: ${{ secrets.SOLANA_WALLET }}
            solana_private_key: ${{ secrets.SOLANA_PRIVATE_KEY }}
```


## Usage by contributors
1. Contributors are instructed to add their Solana wallet address in a specific format when they open a PR
    Solana Wallet Address: <wallet-address>

