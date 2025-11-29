terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "4.54.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "3.7.2"
    }
  }
}

provider "azurerm" {
  features {}
  subscription_id = "9e473b82-c9db-48c0-a130-de7d047d396f"
}

resource "random_integer" "ri" {
  min = 1
  max = 99999
}

resource "azurerm_resource_group" "arg" {
  name     = "TaskBoard${random_integer.ri.result}"
  location = "Poland Central"
}

resource "azurerm_service_plan" "asp" {
  name                = "TaskBoardPlan${random_integer.ri.result}"
  resource_group_name = azurerm_resource_group.arg.name
  location            = azurerm_resource_group.arg.location
  os_type             = "Linux"
  sku_name            = "F1"
}

resource "azurerm_linux_web_app" "alwa" {
  name                = "TaskBoardApp${random_integer.ri.result}"
  resource_group_name = azurerm_resource_group.arg.name
  location            = azurerm_service_plan.asp.location
  service_plan_id     = azurerm_service_plan.asp.id

  connection_string {
    name = "DefaultConnection"
    type = "SQLAzure"
    //value = "Data Source=tcp:${fully qualified domain name of the MSSQL server},1433;Initial Catalog=${name of the SQL database};User ID=${username of the MSSQL server administrator};Password=${password of the MSSQL server administrator};Trusted_Connection=False; MultipleActiveResultSets=True;"
    value = "test"
  }

  site_config {
    application_stack {
      dotnet_version = "6.0"
    }
    always_on = false
  }
}

resource "azurerm_mssql_server" "sqlserver" {
  name                         = "mssqlserver${random_integer.ri.result}"
  resource_group_name          = azurerm_resource_group.arg.name
  location                     = azurerm_resource_group.arg.location
  version                      = "12.0"
  administrator_login          = "4dm1n157r470r"
  administrator_login_password = "4-v3ry-53cr37-p455w0rd"
}

resource "azurerm_mssql_database" "database" {
  name         = "database${random_integer.ri.result}"
  server_id    = azurerm_mssql_server.sqlserver.id
  collation    = "SQL_Latin1_General_CP1_CI_AS"
  license_type = "LicenseIncluded"
  max_size_gb  = 2
  sku_name     = "S0"
  
  # prevent the possibility of accidental data loss
  lifecycle {
    prevent_destroy = false
  }
}

resource "azurerm_mssql_firewall_rule" "FirewallRule1" {
  name             = "FirewallRule1"
  server_id        = azurerm_mssql_server.sqlserver.id
  start_ip_address = "10.0.17.62"
  end_ip_address   = "10.0.17.62"
}

resource "azurerm_app_service_source_control" "github" {
  app_id                 = azurerm_linux_web_app.alwa.id
  repo_url               = "https://github.com/dimitarbd/AzureTaskBoardApp"
  branch                 = "main"
  use_manual_integration = true
}