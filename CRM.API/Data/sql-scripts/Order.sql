CREATE TABLE [dbo].[Order]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Number] VARCHAR(40) NULL, 
    [CreatedOn] DATETIME NOT NULL, 
    [DeliveryStatus] TINYINT NOT NULL, 
    [OwnerId] INT NOT NULL, 
    [DeliveryDriverId] INT NULL, 
    [DeliveryAddress] TEXT NULL, 
    [ReceiverId] INT NULL, 
    [Comment] TEXT NULL, 
    [DeliveryDate] DATETIME NULL, 
    [ModifiedOn] DATETIME NOT NULL, 
    [Sum] MONEY NULL, 
    [PaymentStatus] TINYINT NOT NULL
)