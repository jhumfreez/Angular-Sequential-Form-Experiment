# Sequential Form Experiment

This repo is a workshop to find a decent pattern for the following form conditions and requirements:
1. You have multiple dropdown fields.
1. The options for the first field are provided by an API call, and this field initializes as enabled with no default selection/value.
1. The rest are empty and disabled.
1. Upon selecting an option from the first, an API call occurs that populates options for the second and enables it.
1. This chain continues for the rest of the fields.
1. If a field changes: all fields following it (not preceding, only following) are reset. The first field after the changed one is reset and remains enabled. The rest of the following fields are reset and disabled.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/ngxs-repro-1rzmzp)
